import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CategoryComponent, CategoryFormComponent, CategoryListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CategoryModule { }
