
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserRepositoryService } from './user-repository.service';
import { NavBarComponent } from './nav-bar.component';
import { AccountMenuComponent } from './account-menu.component';

const coreRoutes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes)
  ],
  declarations: [ 
    NavBarComponent, 
    AccountMenuComponent
  ],
  exports: [
    NavBarComponent, 
    AccountMenuComponent
  ],
  providers: [ UserRepositoryService ]
})
export class CoreModule { }
