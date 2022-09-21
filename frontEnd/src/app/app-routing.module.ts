import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFoodOrderComponent } from './all-food-order/all-food-order.component';
import { AllItemComponent } from './all-item/all-item.component';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { AddMenuComponent } from './Menu/add-menu/add-menu.component';
import { EditMenuComponent } from './Menu/edit-menu/edit-menu.component';
import { MenuDetailsComponent } from './Menu/menu-details/menu-details.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:"full"},
  {path:"manager",component:ManagerComponent},
  {path:"staff",component:StaffComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"login",component:LoginComponent},
  {path:"all-products",component:ProductDetailsComponent},
  {path:"updateproducts/:id",component:EditProductComponent},
  {path:"food-order", component:FoodOrderComponent},
  {path:"all-food-order", component:AllFoodOrderComponent},
  {path:"updateorders/:id", component:EditFoodOrderComponent},
  {path:"item", component:ItemComponent},
  {path:"all-item", component:AllItemComponent},
  {path:"updateitems/:id", component:EditItemComponent},
  // {path:"item", component:FoodOrderComponent},
  {path: "registration",component:RegistrationComponent },
  {path:"add-menu",component:AddMenuComponent},
  {path:"menu-details",component:MenuDetailsComponent},
  {path:"edit-menu/:id",component:EditMenuComponent},
  {path:"users",component:StaffDetailsComponent}
  

  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
