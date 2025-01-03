"use client"
import { useState } from "react"
export const CartItems = () => {
    const [quantity, setQuantity] = useState(1)
    return <div className="flex flex-col p-2 px-3  justify-center items-center border drop-shadow-lg  rounded-lg  ">
        <div className="flex justify-between gap-12 items-center ">
            <div>
                Item Name
            </div>
            <div className="flex gap-5 border rounded-lg p-1 px-2">
                <div   onClick={() => {
                    setQuantity(quantity - 1)
                }}
                >-</div>
                <div  className="text-center w-2 " >{quantity}</div>
                <div onClick={() => {
                    setQuantity(quantity + 1)
                }}
                >+</div>
            </div>
            <div className="w-8 text-center min-w-[2rem] pr-12">₹{159 * quantity}</div>
        </div>
    </div>
}