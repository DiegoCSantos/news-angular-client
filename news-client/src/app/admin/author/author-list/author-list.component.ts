import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  autores =[
    {id:1 , name:"Autor1", email:"autor1@email.com", bioSummary:"Resumo da bio 1 ... ", bio:"bio 1 .." },
    {id:1 , name:"Autor2", email:"autor2@email.com", bioSummary:"Resumo da bio 2 ... ", bio:"bio 2 .." },
    {id:1 , name:"Autor3", email:"autor3@email.com", bioSummary:"Resumo da bio 3 ... ", bio:"bio 3 .." },
    {id:1 , name:"Autor4", email:"autor4@email.com", bioSummary:"Resumo da bio 4 ... ", bio:"bio 4 .." },
    {id:1 , name:"Autor5", email:"autor5@email.com", bioSummary:"Resumo da bio 5 ... ", bio:"bio 5 .." },
    {id:1 , name:"Autor6", email:"autor6@email.com", bioSummary:"Resumo da bio 6 ... ", bio:"bio 6 .." },
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
