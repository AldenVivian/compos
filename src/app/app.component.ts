import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'compos';

  sample = [1,2,3];
name:any;
  
  productForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.productForm = this.fb.group({
      
      schoolarr: this.fb.array([this.fb.group({name:''})])
    })

  }
  ngOnInit(){
     /* Initiate the form structure */
     this.productForm = this.fb.group({
      
      schoolarr: this.fb.array([this.fb.group({name:''})])//formarray
    })
    
    
  }

  get schools() {
    return this.productForm.get('schoolarr') as FormArray;
  }


  addSchool() {
    this.schools.push(this.fb.group({name:''}));
  }
  onTrackById(index: number, item: FormGroup) {
    return index; // or unique value from {item} something like this (item.get('id').value)
 }

  
  deleteSchool(index:number) {
    this.schools.removeAt(index);
  }
  li:any = []

  sampler:string="";
  sampler2:string="";
  onSubmit(){
    console.log("hi");
    this.li = this.productForm.value
    console.log(this.li)
    console.log("array "+this.productForm.value)
   
    //console.log("array value "+this.productForm.controls[1].value)//undefined error
    this.sampler =JSON.stringify(this.productForm.value);
    //this.sampler2 =JSON.stringify(this.schoolarr.value.name);
    console.log("sampler "+this.sampler)
  }
  




}
