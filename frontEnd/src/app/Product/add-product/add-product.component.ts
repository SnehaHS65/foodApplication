import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/Product/class/products';
import { ProductService } from 'src/app/Services/product.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  result:any
  products = new Products()
  constructor(private product:ProductService,private route:Router) { }

  ngOnInit(): void {
  }

  addProduct(form:NgForm){
    this.product.addData(this.products).subscribe((data)=>{
      this.result=data
      console.log(this.result)
      window.alert("Product has been Added")
      this.route.navigate(['/all-products'])
    })
  }

  // constructor(private foodproduct: ProductService, private menu: MenuService, private route : Router) { }

  // ngOnInit(): void {
  // }
  // manager = JSON.parse(localStorage.getItem("user")!);
  // menuRes:any
  // menuIdRes:any
  // foodProdRes:any
  // addFoodProduct(form: NgForm){
  //   console.log(form.value);
  //   form.value.availability = true
  //   //to get menuID
  //   this.menu.getMenuByManagerId(this.manager.id).subscribe(data=>{
  //     this.menuRes = data;
  //     this.menuIdRes = this.menuRes.data.id 
  //     console.log(this.menuIdRes);
      
  //     this.foodproduct.addFoodProduct(form.value).subscribe(data=>{
  //       this.foodProdRes = data;
  //       console.log(this.foodProdRes.message);
  //       this.route.navigate(["/menu"])
  //    })     
  //   })
  // }

}

