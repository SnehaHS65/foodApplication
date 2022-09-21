import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodOrderComponent } from './food-order/food-order.component';

import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EditFoodOrderComponent } from './edit-food-order/edit-food-order.component';
import { RegistrationComponent } from './registration/registration.component';
import { AllFoodOrderComponent } from './all-food-order/all-food-order.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AllItemComponent } from './all-item/all-item.component';
import { AddMenuComponent } from './Menu/add-menu/add-menu.component';
import { EditMenuComponent } from './Menu/edit-menu/edit-menu.component';
import { MenuDetailsComponent } from './Menu/menu-details/menu-details.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { ProductDetailsComponent } from './Product/product-details/product-details.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodOrderComponent,
  
    ItemComponent,
    EditFoodOrderComponent,
    RegistrationComponent,
    AllFoodOrderComponent,
    EditItemComponent,
    AllItemComponent,
    AddMenuComponent,
    EditMenuComponent,
    MenuDetailsComponent,
    AddProductComponent,
    ProductDetailsComponent,
    EditProductComponent,
    LoginComponent,
    ManagerComponent,
    StaffComponent,
    StaffDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
