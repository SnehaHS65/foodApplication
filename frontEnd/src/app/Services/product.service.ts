import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  addData(product:any){
    return this.http.post(`http://localhost:8080/products/`,product)
   }
  getData() {
    return this.http.get("http://localhost:8080/products");
  }
  deleteData(id: any) {
    return this.http.delete(`http://localhost:8080/deleteproducts/${id}`);
  }
  // isregisteredStaff() {
  //   return localStorage.getItem('registeredRole')
  // }
  updateproducts(id:any, product:any){
    return this.http.put(`http://localhost:8080/updateproducts/${id}`,product)
  }
  // isproducts() {
  //   if ((this.isregisteredStaff() != 'undefined' && ((this.isregisteredStaff() == 'Staff') || (this.isregisteredStaff() == 'Manager') || (this.isregisteredStaff() == 'Admin')))) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }


 
  //  getAllFoodProducts(){
  //    return this.http.get("http://localhost:8080/foodproduct")
  //  }
}
