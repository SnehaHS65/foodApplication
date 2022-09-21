
import { FoodOrder } from "src/app/FoodOrder/class/food-order";
export class Bill {
    foodorder=new FoodOrder();
    id!:number;
    gst!:number;
    serviceCost!:number;
    t_cost!:number;
    email!:string;

    constructor(){}  
}
