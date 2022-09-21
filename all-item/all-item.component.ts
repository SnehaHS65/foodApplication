import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { FoodorderService } from '../Services/foodorder.service';
import { ItemsService } from '../Services/items.service';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.css']
})
export class AllItemComponent implements OnInit {

  result:any;
  constructor(private items:ItemsService,private user:UserService,private route:ActivatedRoute,private order:FoodorderService) { }

  ngOnInit(): void {

    this.items.getData().subscribe((data)=>{
      this.result=data;
      console.log(this.result)
      
    //   let id= this.route.snapshot.params['id'];
    
    // this.order.getData().subscribe((data)=>{
    //   this.result=data
    //   console.log(this.result);

    //   for(let r of this.result){
    //     if (id==r.id){
    //       this.bill=r
    //       console.log(this.bill);

    //     }
    //     }
    //   })

    })
  }
  deleteItem(id:any){
    this.items.deleteData(id).subscribe((res)=>{
      console.log(res);
      this.items.getData().subscribe((data)=>{
        this.result=data;
        console.log(data);
        
      })
      
    })
  }

//   bill(email:any,orderId:any,){
//     this.user.email(email,orderId).subscribe((res)=>{
//       console.log(res);
      
      
//       this.items.getData().subscribe((data)=>{
//         this.result=data;
//         console.log(data);

      

//     })
//     window.alert("Bill sent Successfully")
//   })
// }
  


}
