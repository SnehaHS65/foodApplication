import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodorderService {
  id(id: any, foodOrder: FoodorderService) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  addData(food:any){
  return this.http.post("http://localhost:8080/saveorders",food)
  }
  getData(){
    return this.http.get("http://localhost:8080/orders");

  }
  updateFood(id:any,food:any){
    return this.http.put(`http://localhost:8080/updateorders/${id}`, food)

  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:8080/orders/${id}`)
  }

}


