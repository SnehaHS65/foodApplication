import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user:UserService,private route:Router) { }

  ngOnInit(): void {
  }

  regUser(form:NgForm){
    console.log(form.value);

    this.user.saveUser(form.value).subscribe((res)=>{
      console.log(res);
      window.alert("Staff Added");
      this.route.navigate(['/users']);
      
    })
  }

}
