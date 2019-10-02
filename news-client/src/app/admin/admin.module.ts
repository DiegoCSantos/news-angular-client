import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { FileModule } from './file/file.module';
import { CategoryModule } from './category/category.module';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author/author.component';
import { PostComponent } from './post/post/post.component';
import { CommentComponent } from './comment/comment/comment.component';
import { FileComponent } from './file/file/file.component';
import { CategoryComponent } from './category/category/category.component';


  const adminRoutes: Routes=[ 
    {path:'admin', component: AdminComponent,
    children:[
      {path:'author', component: AuthorComponent},
      {path:'post', component: PostComponent},
      {path:'comment', component: CommentComponent},
      {path:'file', component: FileComponent},
      {path:'category', component: CategoryComponent}
    ]},
   
  ];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
    AuthorModule,
    PostModule,
    CommentModule,
    FileModule,
    CategoryModule
  ]
})
export class AdminModule { }
