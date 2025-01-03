import { FoodItem } from "../../components/FoodItem";
import { notFound } from "next/navigation";
import { menu } from "../../data/data";


const foodItemsData= menu;

export default function FoodTypePage({ params }: { params: { foodType: string } }) {
  const { foodType } = params;
  const foodItems = foodItemsData[foodType];

  if (!foodItems) {
    notFound();
  }

  return (
    <div className="mx-6">
      <h1 className="font-bold text-xl">{foodType.charAt(0).toUpperCase() + foodType.slice(1)}</h1>
      <div className="grid grid-cols-2 gap-6">
        {foodItems.map((item, index) => (
          <FoodItem key={index} item={item}  />
        ))}
      </div>
    </div>
  );
}
