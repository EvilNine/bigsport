import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "src/app/pages/home/home.component";
import { CategoryComponent } from "src/app/pages/category/category.component";

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'category/:id', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
