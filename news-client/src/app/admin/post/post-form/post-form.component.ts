import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  form:FormGroup;
  autores=[
    {id:1, name:"Autor 1"},
    {id:2, name:"Autor 2"},
    {id:3, name:"Autor 3"},
    {id:4, name:"Autor 4"},
    {id:5, name:"Autor 5"},
  ];

  post =null;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
    ) { 
      this.post =this.router.getCurrentNavigation().extras.state;
      console.log(this.post);
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
        author:[this.post?this.post.author: null],
        title:[this.post?this.post.title:''],
        summary:[this.post?this.post.summary:''],
        content:[this.post?this.post.content:'']
    });
  }

  enviar(){
    const postN =this.form.getRawValue();
    console.log(postN);
  }

}
