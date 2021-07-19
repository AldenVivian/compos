import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
