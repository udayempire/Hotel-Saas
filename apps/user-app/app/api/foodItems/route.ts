import { NextResponse } from "next/server";
import prisma from "@repo/db/client";

export async function GET(){
    try{
        const foodItems = await prisma.foodItem.findMany({
            select:{
                id:true,
                itemName:true,
                price:true,
                quantity:true,
                availability:true,
                category:{
                    select:{
                        categoryName:true
                    }
                }
            }
        })
        return NextResponse.json(foodItems,{status:200})
    }catch(err){
        console.log(err)
        return NextResponse.json({message:"error fetching foodItems"}, {status:500})
    }
}