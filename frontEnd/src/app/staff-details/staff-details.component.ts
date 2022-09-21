import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  result:any


  constructor(private user:UserService) { }

  ngOnInit(): void {

    this.user.getAllStaffs().subscribe((t)=>{

      this.result=t;
      console.log(this.result);
      
    })


  }

  deleteUser(id:any){
    this.user.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.user.getAllStaffs().subscribe((t)=>{
        this.result=t;
        console.log(t);
        
      })
      
      
    })
  }

}
