import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  categorias =[
    {id:"1", name:"category 1 ", summary:"summary 1"},
    {id:"2", name:"category 2 ", summary:"summary 2"},
    {id:"3", name:"category 3 ", summary:"summary 3"},
    {id:"4", name:"category 4 ", summary:"summary 4"},
    {id:"5", name:"category 5 ", summary:"summary 5"},
  ]


  constructor() { }


  ngOnInit() {
  }

}
