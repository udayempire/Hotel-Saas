import { CartItems } from "../../components/CartItems";

export default function Cart() {
    return <div>
        <div className="flex flex-col p-2 justify-center items-center border drop-shadow-lg m-2 rounded-lg">
            <h1>Table No</h1>
            <h2 className="text-bold text-4xl"> 08</h2>
        </div>
        <div className="m-2 flex flex-col gap-2 ">
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>

        </div>
    </div>
}