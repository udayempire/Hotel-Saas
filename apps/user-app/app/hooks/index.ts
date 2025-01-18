"use client"
import { useState, useEffect } from "react";
import axios from "axios";
interface FoodItemProps {
    id: number,
    itemName: string,
    price: number,
    quantity: number,
    availabilty?: boolean,
    category:{
        categoryName:string
    }
}
export const useAllFoodItems = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [allFoodItems, setAllFoodItems] = useState<FoodItemProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/foodItems")
                if (!response.data || response.data.length === 0) {
                    alert("No food items found.");
                }
                setAllFoodItems(response.data)
                setLoading(false)
            }catch (err) {
                console.error(err)
            }
        }
        fetchData()
    },[])
    return {
        loading, allFoodItems
    }
}
