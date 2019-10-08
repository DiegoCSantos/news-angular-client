import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts =[
    {id:"1", title:"title 1", summary:"summary 1", content:"content 1", author: {id:1, name:"Autor 1"}},
    {id:"2", title:"title 2", summary:"summary 2", content:"content 2", author: {id:2, name:"Autor 2"}},
    {id:"3", title:"title 3", summary:"summary 3", content:"content 3", author: {id:3, name:"Autor 3"}},
    {id:"4", title:"title 4", summary:"summary 4", content:"content 4", author: {id:4, name:"Autor 4"}},
    {id:"5", title:"title 5", summary:"summary 5", content:"content 2", author: {id:5, name:"Autor 5"}},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
