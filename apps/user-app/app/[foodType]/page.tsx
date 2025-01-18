import { FoodItem } from "../../components/FoodItem";
import { notFound } from "next/navigation";
import { useAllFoodItems } from "../hooks/index";
export default   function  FoodTypePage({ params }: { params: { foodType: string } }) {
  const { loading,allFoodItems } = useAllFoodItems()
  const {foodType} =  params;
  if(loading){
    return <div>
      Loading...
    </div>
  }
  const foodItems = allFoodItems.filter((item)=>item.category?.categoryName.toLowerCase()===foodType.toLowerCase())
  if (!foodItems) {
    notFound();
  }
  return (
    <div className="mx-6">
      <h1 className="font-bold text-xl">{foodType.charAt(0).toUpperCase() + foodType.slice(1)}</h1>
      <div className="grid grid-cols-2 gap-6">
        {foodItems.map((item, index) => (
          <FoodItem key={index} item={item}  /> //used recoil
        ))}
      </div>
    </div>
  );
}