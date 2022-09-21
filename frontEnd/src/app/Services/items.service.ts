import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  addData(i: any) {
    return this.http.post("http://localhost:8080/saveitems", i);
  }
  getData(){
    return this.http.get("http://localhost:8080/getitems");
  }
  updateItem(id:any,i:any){
    return this.http.put(`http://localhost:8080/updateitems/${id}`, i)
  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:8080/deleteitems/${id}`)
  }
  

}
