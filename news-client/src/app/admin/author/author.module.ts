import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthorComponent } from './author/author.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthorComponent, AuthorFormComponent, AuthorListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthorModule { }
