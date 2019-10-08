import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  form:FormGroup;
  category =null;

  constructor(
    private formBuilder : FormBuilder, 
    private router:Router) { 
      this.category =this.router.getCurrentNavigation().extras.state;
    }

  ngOnInit() {
    this.form =this.formBuilder.group({
      name:[this.category?this.category.name:''],
      summary:[this.category?this.category.summary:''],
    });
  }

  enviar(){
    const author =this.form.getRawValue();
    console.log(author);
  }

}
