import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/Services/menu.service';
import { Menu } from 'src/app/Menu/class/menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  result:any
  menu = new Menu()
  constructor(private menu1:MenuService, private route:Router) { }
  
  ngOnInit(): void {
  }

  addMenu(form:NgForm){
    console.log(this.menu);
    this.menu1.putdata(this.menu).subscribe((res)=>{
      this.result=res
      console.log(this.result);
      window.alert("Menu has been Added")
    })
  }

}