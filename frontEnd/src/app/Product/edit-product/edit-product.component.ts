import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Products } from '../class/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private product:ProductService, private route:ActivatedRoute,private root:Router) { }
  result:any
  products = new Products()
  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.product.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.products=r
          console.log(this.products);
        }
        }
      })
  }
  
  editProduct(form:NgForm){
    this.product.updateproducts(this.products.id,this.products).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['all-products'])
      
    })
  }

}
