import { FoodItem } from "../../components/FoodItem";
import { notFound } from "next/navigation";
import { menu } from "../../../../data/data";
import { FoodType } from "../../components/FoodType";


const foodItemsData= menu;

export default async function FoodTypePage({ params }: { params: { foodType: string } }) {
  const currentFoodType = await params.foodType;
  console.log(currentFoodType)
  const foodItems = foodItemsData[currentFoodType];

  if (!foodItems) {
    notFound();
  }
  console.log()

  return (
    <div className="mx-6">
      <h1 className="font-bold text-xl">{currentFoodType.charAt(0).toUpperCase() + currentFoodType.slice(1)}</h1>
      <div className="grid grid-cols-2 gap-6">
        {foodItems.map((item, index) => (
          <FoodItem key={index} item={item}  />
        ))}
      </div>
    </div>
  );
}
