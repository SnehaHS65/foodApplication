import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


//import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  res:any
  ngOnInit(): void {
  }

  login(form: NgForm){
   console.log(form.value);
   this.userService.loginUser(form.value).subscribe(t=>{
    this.res = t;
    console.log(this.res)
    if(this.res.error){
      console.log("Invalid credentials");
    }else if(this.res.t.role === "Manager"){
      localStorage.setItem("user", JSON.stringify(this.res.t));
      this.router.navigate(['/manager']);
    }else if(this.res.t.role === "Staff"){
      localStorage.setItem("user", JSON.stringify(this.res.t));
      this.router.navigate(['/staff']);
    }
   })
  }

  

  reg(){
    this.router.navigate(['/registration']);
  }

}
