import { selector } from "recoil"
import { cartState } from "./cardState";
//selector to compute total price
export const totalPriceState = selector({
    key:"totalPriceState",
    get:({get})=>{
            const cart = get(cartState);
            return cart.reduce((total,items)=>total+items.price*items.quantity,0);
        },
});