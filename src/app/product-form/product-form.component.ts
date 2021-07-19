import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  deptForm: FormGroup;
  
  constructor(private fb: FormBuilder){
    this.deptForm = this.fb.group({
      
      progarr: this.fb.array([this.fb.group({program:''})])
    })

  }
  ngOnInit(){
     /* Initiate the form structure */
     this.deptForm = this.fb.group({
      
      progarr: this.fb.array([this.fb.group({program:''})])
    })
    
  }

  get progs() {
    return this.deptForm.get('progarr') as FormArray;
  }


  addProgram() {
    this.progs.push(this.fb.group({program:''}));
  }

  
  deleteProgram(index:number) {
    this.progs.removeAt(index);
  }

}
