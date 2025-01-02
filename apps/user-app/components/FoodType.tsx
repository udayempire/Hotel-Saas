import Image from "next/image";
import Link from "next/link";

const foodCategories = [
  { name: "Starters", image: "/foodType1.png" },
  { name: "Chinese", image: "/foodType1.png" },
  { name: "Sweets", image: "/foodType1.png" },
  { name: "North Indian", image: "/foodType1.png" },
  { name: "Combos", image: "/foodType1.png" },
  { name: "Drinks", image: "/foodType1.png" },
];

export const FoodType = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mx-6">
      {foodCategories.map((category) => (
        <div key={category.name}>
          <Link href={`/${category.name.toLowerCase().replace(" ", "")}`}>
            <Image src={category.image} width={150} height={120} alt={category.name} />
            <p className="font-bold text-center">{category.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};