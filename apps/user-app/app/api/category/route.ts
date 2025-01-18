import prisma from "@repo/db/client";
import { NextResponse } from "next/server";
export async function GET(){
    try{
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories,{status:200})
    }catch(error){
        console.error(error)
        return NextResponse.json({message:"Failed to fetch Data"},{status:500});
    }
}
// This routes fetches categories of the restaurant!