"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react"
import axios from "axios"
interface Category{
  id: number,
  categoryName: string
}

export const FoodType = () => {
  const [categories,setCategories]= useState<Category[]>([]);
  const [loading,setLoading] =useState<boolean>(true);
  useEffect(()=>{
    async function fetchCategories(){
      try{
        const response = await axios.get("/api/category")
        setCategories(response.data)
      }catch(error){
        console.log("Error fetching categories", error)
      }finally{
        setLoading(false)
      }
    }
    fetchCategories();
  },[])

  if(loading){
    return <p>Loading Categories...</p>
  }
  return (
    <div className="grid grid-cols-3 gap-5 mx-6">
      {categories.map((data) => (
        <div key={data.categoryName}>
          <Link href={`/${data.categoryName.toLowerCase().replace(" ", "")}`}>
            <Image src={"/foodType1.png"} width={150} height={120} alt={data.categoryName} />
            <p className="font-bold text-center">{data.categoryName}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};