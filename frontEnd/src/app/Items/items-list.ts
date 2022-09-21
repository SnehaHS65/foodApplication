import { FoodOrder } from "../FoodOrder/class/food-order"

export class ItemsList {
    
    productId!:String
    id!:number
    name!:string
    type!:string
    quantity!:string
    price!:string
    foodOrder = new FoodOrder()
}
