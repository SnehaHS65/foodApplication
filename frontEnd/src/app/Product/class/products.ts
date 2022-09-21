
import { Menu } from "src/app/Menu/class/menu"

export class Products {
    id!:number
    name!:string
    about!:string
    type!:string
    availability!:string
    price!:number
    menu = new Menu()
    //manager = new Manager()

    constructor(){}
}