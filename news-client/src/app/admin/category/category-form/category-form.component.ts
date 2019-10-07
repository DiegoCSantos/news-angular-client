import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.form =this.formBuilder.group({
      name:[''],
      summary:[''],
    });
  }

  enviar(){
    const author =this.form.getRawValue();
    console.log(author);
  }

}
