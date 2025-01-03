"use client"
import { Appbar } from "@repo/ui/appbar";
import { CartItems } from "../../components/CartItems";
import { useState } from "react";
export default function Cart() {
    const [totalPrice,setTotalPrice]= useState<number>(0)
    const updateTotalPrice=(price:number)=>{
        setTotalPrice((prevTotal)=>prevTotal+price)
    }
    return <div>
        <Appbar />
        <div className="flex flex-col p-2 justify-center items-center border drop-shadow-lg m-2 rounded-lg">
            <h1>Table No</h1>
            <h2 className="text-bold text-4xl"> 08</h2>
        </div>
        <div className="m-2 flex flex-col gap-2 ">
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={200} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
            <CartItems price={99} itemName={"Dal Makhani"} updateTotalPrice={updateTotalPrice}/>
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