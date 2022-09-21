import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  result:any


  constructor(private menuService:MenuService) { }

  ngOnInit(): void {

    this.menuService.getdata().subscribe((data)=>{

      this.result=data;
      console.log(this.result);
      
      
    })


  }

  // deleteFood(id:any){
  //   this.menuService.deletedata(id).subscribe((res)=>{
  //     console.log(res);
      
  //   })
  // }

}
