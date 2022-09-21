import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodOrder } from '../FoodOrder/class/food-order';
import { FoodorderService } from '../Services/foodorder.service';

@Component({
  selector: 'app-edit-food-order',
  templateUrl: './edit-food-order.component.html',
  styleUrls: ['./edit-food-order.component.css']
})
export class EditFoodOrderComponent implements OnInit {

  constructor( private foodOrder:FoodorderService,private route:ActivatedRoute,private router:Router) { }
  order=new FoodOrder()
  result:any;

  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    console.log(id);
    

    this.foodOrder.getData().subscribe((data)=>{
      this.result=data;
      console.log(this.result);

      for(let r of this.result.t){
        if(id==r.id){
        this.order=r;
        console.log(this.order);
         }
        }
      })

  }
  editOrder(form:NgForm){
    this.foodOrder.updateFood(this.order.id,this.order).subscribe((res)=>{
      console.log(res);
      window.alert("Order Updated")

      this.router.navigate(['/all-food-order'])
      
    })

  }
}
  

