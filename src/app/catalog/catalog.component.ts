import { Component, OnInit } from '@angular/core';

import { UserRepositoryService } from "./../core/user-repository.service";
import { CatalogRepositoryService } from './catalog-repository.service';
import { FilterClassesService } from './filter-classes.service';

@Component({
  moduleId: module.id,
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

  classes:any[];
  visibleClasses:any[];
  orderByField: string;

  constructor(
    private userRepository: UserRepositoryService, 
    private catalogRepository: CatalogRepositoryService,
    private filterClassesService: FilterClassesService
  ) {
    this.orderByField = '';
  }

  ngOnInit() {
    this.catalogRepository.getCatalog()
      .subscribe(classes => { 
        this.classes = classes; 
        this.applyFilter('');
      });
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId)
      .subscribe(
        null,
        (err) => {console.error(err); classToEnroll.processing = false}, //add a toast message or something
        () => {classToEnroll.processing = false; classToEnroll.enrolled=true;},
      );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId)
      .subscribe(
        null,
        (err) => { console.error(err); classToDrop.processing = false}, //add a toast message or something
        () => {classToDrop.processing = false; classToDrop.enrolled=false;}
      );
  }

  applyFilter(filter) {
    this.visibleClasses = this.filterClassesService.filterClasses(filter, this.classes);
  }

  getCurrentUser() {
    return this.userRepository.currentUser;
  }

  public mutateFirstProfessor() {
    this.visibleClasses[0].professor = "Zebradude";
  }

  public updateFirstProfessor() {
    this.visibleClasses = [ Object.assign({}, this.visibleClasses[0], {
      professor: "Zebraton"
    }), ...this.visibleClasses.slice(1)];
  }
  
}
