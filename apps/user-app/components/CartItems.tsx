import { useState, useEffect } from "react";

interface cartItemsProps {
    price: number;
    itemName: string;
    updateTotalPrice: (price: number) => void; // Function to update the total price
}

export const CartItems = ({ price, itemName, updateTotalPrice }: cartItemsProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [previousTotal, setPreviousTotal] = useState<number>(0); // Track previous total to avoid duplicate updates

    const handelDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handelIncrement = () => {
        setQuantity(quantity + 1);
    };

    useEffect(()=>{
        const currentTotal = price *quantity;
        if (currentTotal !==previousTotal ){
            updateTotalPrice(currentTotal - previousTotal);
            setPreviousTotal(currentTotal)
        }
    },[quantity,price,previousTotal,updateTotalPrice])
    
    return (
        <div className="flex flex-col p-2 px-3 justify-center items-center border drop-shadow-lg rounded-lg">
            <div className="flex justify-between gap-12 items-center">
                <div>{itemName}</div>
                <div className="flex gap-5 border rounded-lg p-1 px-2">
                    <button onClick={handelDecrement}>-</button>
                    <div className="text-center w-2">{quantity}</div>
                    <button onClick={handelIncrement}>+</button>
                </div>
                <div className="w-8 text-center min-w-[2rem] pr-12">₹{price * quantity}</div>
            </div>
        </div>
    );
};
