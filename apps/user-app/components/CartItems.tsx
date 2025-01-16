import { useState } from "react"
interface cartItemsProps {
    item:{id:number,itemName:string,price:number,quantity:number}
    // updateTotalPrice: number; 
    removeItem: (id: number) => void; 
}

export const CartItems = ({ item,removeItem }: cartItemsProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    // const [previousTotal, setPreviousTotal] = useState<number>(0); 

    const handelDecrement = () => {
        if(quantity===1){
            // updateTotalPrice(-previousTotal)
            removeItem(item.id)
            setQuantity(0)
        }
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handelIncrement = () => {
        setQuantity(quantity + 1);
    };

    // useEffect(()=>{
    //     const currentTotal = item.price *quantity;
    //     if (currentTotal !==previousTotal ){
    //         // updateTotalPrice(currentTotal - previousTotal);
    //         setPreviousTotal(currentTotal)
    //     }
    // },[quantity,item.price,previousTotal,updateTotalPrice])

    return (
        <div className="flex flex-col p-2 px-3 justify-center items-center border drop-shadow-lg rounded-lg">
            <div className="flex justify-between gap-12 w-full items-center">
                <div className="w-2/5">{item.itemName}</div>
                <div className="flex gap-5 border rounded-lg p-1 px-2 ">
                    <button onClick={handelDecrement}>-</button>
                    <div className="text-center w-2/6">{quantity}</div>
                    <button onClick={handelIncrement}>+</button>
                </div>
                <div className="w-8 text-center min-w-[2rem] pr-12">₹{item.price * quantity}</div>
            </div>
        </div>
    );
};