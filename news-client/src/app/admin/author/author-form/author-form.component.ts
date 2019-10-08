import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  form:FormGroup;
  author:any;

  constructor(
    private formBuilder : FormBuilder, 
    private router:Router
    ) { 
      this.author =this.router.getCurrentNavigation().extras.state;
    }

  ngOnInit() {
    this.form =this.formBuilder.group({
      name:       [this.author? this.author.name: ''],
      email:      [this.author? this.author.email: ''],
      bioSummary: [this.author? this.author.bioSummary: ''],
      bio:        [this.author? this.author.bio: '']
    });
   
  }

  enviar(){
    const author =this.form.getRawValue();
    console.log(author);
  }

}
