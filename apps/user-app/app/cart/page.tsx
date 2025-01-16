"use client"
import { Appbar } from "@repo/ui/appbar";
import { CartItems } from "../../components/CartItems";
import { useRecoilValue,useSetRecoilState} from "recoil";
import { cartState } from "@repo/recoil/cardState"
import {totalPriceState} from "@repo/recoil/totalPriceState";
export default function Cart() {
    // const [cartItems, setCartItems] = useState([
    //     { id: 1, itemName: "Dal Makhani", price: 99, quantity: 1 },
    //     { id: 2, itemName: "Dal Fry", price: 200, quantity: 1 },
    //     { id: 3, itemName: "Butter Chicken", price: 180, quantity: 1 },
    //     { id: 4, itemName: "Tandori Roti", price: 10, quantity: 1 },
    //     { id: 5, itemName: "Shahi Panner", price: 150, quantity: 1 },
    //     { id: 6, itemName: "Pepsi", price: 40, quantity: 1 },
    // ]);
    const cartItems= useRecoilValue(cartState);
    const totalPrice= useRecoilValue(totalPriceState);
    const setCart= useSetRecoilState(cartState);
    // const updateTotalPrice=(price:number)=>{
    //     setTotalPrice((prevTotal)=>prevTotal+price)
    // }
    const removeItem=(id:number)=>{
        setCart((prevItems)=>prevItems.filter((item)=>item.id !==id))
    }
    return <div>
        <Appbar />
        <div className="flex flex-col p-2 justify-center items-center border drop-shadow-lg m-2 rounded-lg">
            <h1>Table No</h1>
            <h2 className="text-bold text-4xl"> 08</h2>
        </div>
        <div className="m-2 flex flex-col gap-2 ">
            {cartItems.map((item)=>(
                <CartItems key={item.id} item={item}  removeItem={removeItem}/>
            ))}
        </div>
        {/* costbar below */}
        <div className="flex bottom-16 sticky px-4 py-3 justify-between items-center bg-white m-2 border-t">
                <div className="text-2xl">Total Cost</div>
                <button className=" bg-green-600 rounded-lg text-white drop-shadow-md p-2">
                    <div className="flex gap-2 items-center">
                        <p className="font-light">Pay</p>
                        <p className="text-xl">₹{totalPrice}</p>
                    </div>
                </button>
            </div>
    </div>
}