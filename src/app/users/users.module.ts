import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";  // Se comment below in imports.
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "./../shared/shared.module";
import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent, },
  { path: 'sign-in', component: SignInComponent, },
];

@NgModule({
  imports: [
    // CommonModule, We don't need this because we imported the shared module which exports the CommonModule.
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent, SignInComponent]
})
export class UsersModule {}
