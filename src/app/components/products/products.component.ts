import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/Iproduct';
import { ProductList } from 'src/app/model/ProductList';
import { ElectronicService } from 'src/app/services/electronic.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
// products :Iproduct[] =[];
products : any;
constructor(private electronicService : ElectronicService){
  // this.products = ProductList;
}
  ngOnInit(): void {
    this.electronicService.GetAll().subscribe((response)=>{this.products = response; console.log(response)});
  }
  deleteItem(id:number){
    this.electronicService.Delete(id).subscribe(()=>{this.products=this.products.filter((p:any)=>p.id!=id)})
  }
// @Output() myEvent = new EventEmitter;



}
