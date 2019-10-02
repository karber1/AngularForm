import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingFormComponent } from './testing-form/testing-form.component';


const routes: Routes = [
  {path: 'testing-form', component: TestingFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
