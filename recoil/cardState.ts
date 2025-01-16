import { atom,selector } from "recoil";
import { FoodItemProps } from "../data/data";

//atom to store cart items
export const cartState = atom<FoodItemProps[]>({
    key:"cartState",
    default:[],
})
//selector to compute total price
export const totalPriceState = selector({
    key:"totalPriceState",
    get:({get})=>{
            const cart = get(cartState);
            return cart.reduce((total,item)=>total+item.price*item.quantity,0);
        },
});