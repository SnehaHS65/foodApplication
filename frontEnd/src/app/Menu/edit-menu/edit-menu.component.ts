import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/Services/menu.service';
import { Menu } from '../class/menu';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {
  result:any
  menu = new Menu()
  constructor(private route:ActivatedRoute,private menuupdate:MenuService, private root:Router) { }

  ngOnInit(): void {
    let id= this.route.snapshot.params['id']
    
    this.menuupdate.getdata().subscribe((data)=>{
      this.result=data
      console.log(this.result);

      for(let r of this.result.t){
        if (id==r.id){
          this.menu=r
          console.log(this.menu);
        }
        }
      })
  }
  onupdatemenu(form:NgForm){
    this.menuupdate.updateMenu(this.menu.id,this.menu).subscribe((res)=>{
      console.log(res);
      window.alert("Updated Successfully")
      this.root.navigate(['menu'])    
    })
  }

}