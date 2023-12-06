import { ElectronicService } from 'src/app/services/electronic.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit{
  constructor(private electronicService:ElectronicService,private router :Router,private activatedRoute:ActivatedRoute){}
  formId :any;
  elec : any;
  ngOnInit(): void {
    this.formId = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.formId!=0){
      this.electronicService.GetById(this.formId).subscribe((response)=>{
        this.elec = response;
        this.getName.setValue(this.elec.name)
        this.getPrice.setValue(this.elec.price)
        this.getQuantity.setValue(this.elec.quantity)
        this.getImg.setValue(this.elec.img)
      })
    }
  }
  get getName(){
    return this.productform.controls['name'];
  }
  get getPrice(){
    return this.productform.controls['price'];
  }
  get getQuantity(){
    return this.productform.controls['quantity'];
  }
  get getImg(){
    return this.productform.controls['img'];
  }
  productform = new FormGroup({
    name : new FormControl('', [Validators.required ,Validators.minLength(5)]),
    price : new FormControl('',[Validators.required,Validators.min(1)]),
    quantity : new FormControl('',[Validators.required]),
    img : new FormControl('',[Validators.required]),
  });
  formOperation(e:any){
    console.log(this.productform)
    if(this.productform.status == 'VALID'){
      if(this.formId == 0){
        this.electronicService.Insert(this.productform.value).subscribe()
      }else{
        this.electronicService.Update(this.formId,this.productform.value).subscribe()
      }
      this.router.navigate(['products'])
      
    }
    e.preventDefault
  }
}
