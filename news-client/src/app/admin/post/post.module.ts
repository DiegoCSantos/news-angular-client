import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostComponent, PostFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
