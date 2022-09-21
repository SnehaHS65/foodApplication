import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private menu: MenuService, private route: Router) { }
  res: any;

  ngOnInit(): void {
  }
  manager = JSON.parse(localStorage.getItem("user")!);
  putdata(){
    this.menu.putdata(this.manager.id).subscribe(t=>{
      this.res = t;
      if(this.res.statuscode === 404){
        console.log(this.res.message);
      }else{
        console.log(this.res.message);        
      }
    })
  }
  viewMenu(){
    this.route.navigate(['/all-products']);
  }
  viewStaff(){
    this.route.navigate(['/users']);
  }
  registerUser(){
    this.route.navigate(['/registration']);
  }

  logout(){
  window.alert("Logged Out")
    this.route.navigate(['/login'])
  }

}
