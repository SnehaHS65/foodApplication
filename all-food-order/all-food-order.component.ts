import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodOrder } from '../FoodOrder/class/food-order';
import { FoodorderService } from '../Services/foodorder.service';
import { Bill } from 'src/app/class/bill';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-all-food-order',
  templateUrl: './all-food-order.component.html',
  styleUrls: ['./all-food-order.component.css']
})
export class AllFoodOrderComponent implements OnInit {
result:any;
message:any;
bill1=new Bill();


  constructor(private foodOrder:FoodorderService,private route:ActivatedRoute,private user:UserService) { }

  ngOnInit(): void {

    this.foodOrder.getData().subscribe((data)=>{

      this.result=data;
      console.log(this.result);

      let id= this.route.snapshot.params['id'];


      for(let r of this.result){
        if (id==r.id){
          this.bill1=r
          console.log(this.bill1);

        }
        }
      })
      
    


  }

  deleteFood(id:any){
    this.foodOrder.deleteData(id).subscribe((res)=>{
      console.log(res);
      this.foodOrder.getData().subscribe((data)=>{
        this.result=data;
        console.log(data);
        
      })

      
      
      
    })
  }

//   bill(email:any,id:any){
//     this.user.email(this.bill1.email,this.bill1.id).subscribe((res)=>{
//       this.message=res;
//     console.log(this.message);
      
      
//       this.foodOrder.getData().subscribe((data)=>{
//         this.result=data;
//         console.log(data);

      

//     })
//     window.alert("Bill sent Successfully")
//   })
// }
// genBill(form:NgForm){
    
//   this.billService.generateBill(this.bill.id, this.bill) .subscribe((res)=>{
//     this.message=res;
//     console.log(this.message);

    
//   })
//   window.alert("Bill sent Successfully")
// }



}
