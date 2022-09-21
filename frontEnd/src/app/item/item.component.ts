import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsList } from '../Items/items-list';
import { ItemsService } from '../Services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 
  constructor(private items:ItemsService,private router:Router) { }
  result:any
  item = new ItemsList()
  ngOnInit(): void {
  }

  addItem(form:NgForm){
    this.items.addData(this.item).subscribe((data)=>{
      this.result=data
      console.log(this.result);
      window.alert("Items Added")
      this.router.navigate(['/all-item'])


})
  }
}
