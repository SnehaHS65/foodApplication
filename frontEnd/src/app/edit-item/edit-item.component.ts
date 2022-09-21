import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsList } from '../Items/items-list';
import { ItemsService } from '../Services/items.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  result:any
  item = new ItemsList()
  constructor(private items:ItemsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    console.log(id);

    this.items.getData().subscribe((data)=>{
      this.result=data;
      console.log(this.result);

      for(let r of this.result.t){
        if(id==r.id){
          this.item=r;
          console.log(this.item);
          
        }
        // r.price = this.result.t.price * r.quantity;
      }
      
      
    })

  }


  editItem(form:NgForm){
    this.items.updateItem(this.item.id,this.item).subscribe((res)=>{
      console.log(res);
      window.alert("Item Updated");
    this.router.navigate(['/all-item'])
    })
  }


  }


