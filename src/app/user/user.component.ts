import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  userForm = new FormGroup({
    deptname: new FormControl('',/* [Validators.required]*/),
    schooloption: new FormControl('', /*[Validators.required]*/),
    name: new FormControl('', /*[Validators.required]*/),
    email: new FormControl('', /*[Validators.required]*/),
    phnum: new FormControl('', /*[Validators.required]*/),
    pass: new FormControl('', /*[Validators.required]*/)
  });


  onSubmit(){
      console.log(this.userForm.value);
  }
}

