import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  result:any
  // role='Manager'
  // loginmanagerrole=localStorage.getItem('registeredRole')

  constructor(private products:ProductService) { }

  //loginmanagerID=localStorage.getItem('loginmanagerID')

  ngOnInit(): void {
    this.products.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);
      
    })
  }

  delete(id:any){
      this.products.deleteData(id).subscribe((res)=>{
        console.log(res);
        this.products.getData().subscribe((data)=>{
          this.result=data
          console.log(data);
          
        })
        
      })
  }

}


