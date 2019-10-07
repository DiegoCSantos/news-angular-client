import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.form =this.formBuilder.group({
      name:[''],
      email:[''],
      bioSummary:[''],
      bio:['']
    });
  }

  enviar(){
    const author =this.form.getRawValue();
    console.log(author);
  }

}
