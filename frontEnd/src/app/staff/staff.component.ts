import { Component, OnInit } from '@angular/core';
import { FoodorderService } from '../Services/foodorder.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private order: FoodorderService, private route: Router) { }
  res: any;

  ngOnInit(): void {
  }
  staff = JSON.parse(localStorage.getItem("user")!);
  addData(){
    this.order.addData(this.staff.id).subscribe(t=>{
      this.res = t;
      if(this.res.statuscode === 404){
        console.log(this.res.message);
      }else{
        console.log(this.res.message);        
      }
    })
  }
  viewOrder(){
    this.route.navigate(['/all-food-order']);
  }
  viewItem(){
    this.route.navigate(['/all-item']);
  }
  addItem(){
    this.route.navigate(['/item']);
  }
  logout(){
    window.alert("Logged Out")
    this.route.navigate(['login'])
  }

}
