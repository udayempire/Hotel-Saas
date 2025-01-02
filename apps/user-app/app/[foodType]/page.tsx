import { FoodItem } from "../../components/FoodItem";
import { notFound } from "next/navigation";

const foodItemsData: Record<string, string[]> = {
  starters: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  chinese: ["Item A", "Item B", "Item C", "Item D", "Item E", "Item F"],
  sweets: ["Item X", "Item Y", "Item Z", "Item W", "Item V", "Item U"],
  northindian: ["Item M", "Item N", "Item O", "Item P", "Item Q", "Item R"],
  combos: ["Item G", "Item H", "Item I", "Item J", "Item K", "Item L"],
  drinks: ["Item S", "Item T", "Item U", "Item V", "Item W", "Item X"],
};

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
          <FoodItem key={index} name={item}  />
        ))}
      </div>
    </div>
  );
}
