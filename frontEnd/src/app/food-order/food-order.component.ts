import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FoodOrder } from '../FoodOrder/class/food-order';
import { FoodorderService } from '../Services/foodorder.service';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent implements OnInit {
  result:any;
  //selectedFood:any;
  order=new FoodOrder()

  constructor(private foodorder: FoodorderService, private router:Router) { }

  ngOnInit(): void {
    
  }
  saveOrder(form:NgForm){
  console.log(this.order);

 this.foodorder.addData(this.order).subscribe((res)=>{
  this.result=res;
    console.log(this.result);

    window.alert("Order Created")

  this.router.navigate(['/all-food-order'])
    

  })
  }
}
