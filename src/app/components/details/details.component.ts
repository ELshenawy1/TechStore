import { ElectronicService } from './../../services/electronic.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/Iproduct';
import { ProductList } from 'src/app/model/ProductList';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  productid :any;
  product : any ;
  constructor(private activatedRoute : ActivatedRoute, private router : Router, private electronicService:ElectronicService){
  }
  ngOnInit(): void {
    this.productid =  this.activatedRoute.snapshot.paramMap.get('id');
    this.electronicService.GetById(this.productid).subscribe((response)=>{this.product = response})
    // this.product = ProductList.find(p => p.id == this.productid);
  }
  navigate(){
    this.router.navigate(['/products'])
  }

}
