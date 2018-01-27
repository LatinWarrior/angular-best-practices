import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';

@NgModule({
  imports: [        
    SharedModule,
    RouterModule
  ],
  declarations: [
    CatalogComponent    
  ], exports: [
    CatalogComponent    
  ], providers: [
    CatalogRepositoryService
  ]
})
export class CatalogModule { }
