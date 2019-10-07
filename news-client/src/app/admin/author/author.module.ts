import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthorComponent } from './author/author.component';
import { AuthorFormComponent } from './author-form/author-form.component';



@NgModule({
  declarations: [AuthorComponent, AuthorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthorModule { }
