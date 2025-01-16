import { atom,selector } from "recoil";
import { FoodItemProps } from "../../../data/data";

//atom to store cart items
export const cartState = atom<FoodItemProps[]>({
    key:"cartState",
    default:[],
})
