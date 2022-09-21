import { User } from "src/app/FoodOrder/class/user"

export class Menu {
    id!:number
    name!:string
    user = new User()

    constructor(){}
}