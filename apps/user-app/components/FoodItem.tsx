import Image from "next/image";
import { FoodItemProps } from "../../../data/data"; // Import FoodItem type if it's defined elsewhere

type foodItemProps = {
  item: FoodItemProps; // Ensure the correct type is passed for item
};

export const FoodItem = ({ item }: foodItemProps) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent pointer-events-none" />
        {/* Price and cart */}
        <div className="px-2 left-2 right-2 absolute bottom-2 z-10">
          <div className="flex justify-between items-center">
            <p className="text-white">Rs {item.price}</p> {/* Displaying the dynamic price */}
            <Cart />
          </div>
        </div>
        {/* Food image */}
        <Image
          src={"/foodType2.png"} // You can replace this with item-specific image if available
          width={200}
          height={200}
          alt={item.itemName} // Use itemName as alt text
          className="rounded-md"
        />
      </div>
      <p className="text-center">{item.itemName}</p> {/* Display the item name */}
    </div>
  );
};

const Cart = () => {
  return (
    <div>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" rx="14" fill="white" />
        <path
          d="M5.5 6.68571C5.5 6.30701 5.80703 6 6.18576 6H6.6962C7.56526 6 8.08561 6.58422 8.38316 7.1273C8.58149 7.48932 8.72497 7.90919 8.8372 8.28933C8.86759 8.28694 8.89839 8.28571 8.92953 8.28571H20.3564C21.1155 8.28571 21.6636 9.01204 21.4555 9.74199L19.7843 15.6017C19.4763 16.6818 18.4894 17.4266 17.3663 17.4266H11.9276C10.7952 17.4266 9.80254 16.6696 9.50285 15.5777L8.8075 13.0441L7.6567 9.15957L7.65484 9.15277C7.51247 8.63361 7.37886 8.14862 7.18032 7.78624C6.98751 7.43433 6.83382 7.37143 6.6962 7.37143H6.18576C5.80703 7.37143 5.5 7.06442 5.5 6.68571ZM11.4432 22C12.4532 22 13.2719 21.1813 13.2719 20.1714C13.2719 19.1615 12.4532 18.3429 11.4432 18.3429C10.4333 18.3429 9.61456 19.1615 9.61456 20.1714C9.61456 21.1813 10.4333 22 11.4432 22ZM17.8437 22C18.8537 22 19.6724 21.1813 19.6724 20.1714C19.6724 19.1615 18.8537 18.3429 17.8437 18.3429C16.8337 18.3429 16.015 19.1615 16.015 20.1714C16.015 21.1813 16.8337 22 17.8437 22Z"
          fill="#212121"
        />
      </svg>
    </div>
  );
};
