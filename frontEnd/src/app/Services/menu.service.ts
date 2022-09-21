import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get("http://localhost:8080/getallmenu")
  }

  putdata(menu:any){
    return this.http.post("http://localhost:8080/savemenu",menu)
  }


  // isregisteredManager(){
  //   return localStorage.getItem('registeredRole')
  // }

  // ismenu(){
  //   if ((this.isregisteredManager()!='undefined' && ((this.isregisteredManager()=='Manager') || (this.isregisteredManager()=='Admin')) )){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }
  updateMenu(id:any, menu:any){
    return this.http.put(`http://localhost:8080/updatemenu/${id}`,menu)
  }

  
  
  getMenuByManagerId(managerId:any){
    return this.http.get(`http://localhost:8080/menu/manager/${managerId}`)
  }

  deleteMenu(menuId:number){
    return this.http.delete(`http://localhost:8080/menu/${menuId}`)
  }

}