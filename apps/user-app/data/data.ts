export interface FoodItemProps{
    id:number,
    itemName:string,
    price:number,
    quantity:number
  }
export const menu:Record<string,FoodItemProps[]> = {
    starters: [
        {
          id: 1,
          itemName: "Garlic Bread",
          price: 99,
          quantity: 0
        },
        {
          id: 2,
          itemName: "Bruschetta",
          price: 99,
          quantity: 0
        },
        {
          id: 3,
          itemName: "Onion Rings",
          price: 99,
          quantity: 0
        },
        {
          id: 4,
          itemName: "French Fries",
          price: 99,
          quantity: 0
        },
        {
          id: 5,
          itemName: "Spring Rolls",
          price: 99,
          quantity: 0
        },
        {
          id: 6,
          itemName: "Stuffed Mushrooms",
          price: 99,
          quantity: 0
        }
      ],
    chinese: [
        {
          id: 7,
          itemName: "Egg Roll",
          price: 99,
          quantity: 0
        },
        {
          id: 8,
          itemName: "Manchurian",
          price: 99,
          quantity: 0
        },
        {
          id: 9,
          itemName: "Hot Soup",
          price: 99,
          quantity: 0
        },
        {
          id: 10,
          itemName: "Chow Mein",
          price: 99,
          quantity: 0
        },
        {
          id: 11,
          itemName: "Spring Rolls",
          price: 99,
          quantity: 0
        },
        {
          id: 12,
          itemName: "White Sauce Pasta",
          price: 99,
          quantity: 0
        }
      ],
      
    sweets: [
        {
          id: 13,
          itemName: "Lava Cake",
          price: 99,
          quantity: 0
        },
        {
          id: 14,
          itemName: "Kaju Barfi",
          price: 10,
          quantity: 0
        },
        {
          id: 15,
          itemName: "Gulab Jamun",
          price: 99,
          quantity: 0
        },
        {
          id: 16,
          itemName: "Mango Sorbet",
          price: 99,
          quantity: 0
        },
        {
          id: 17,
          itemName: "Gajar Halwa",
          price: 99,
          quantity: 0
        },
        {
          id: 18,
          itemName: "Cheese Cake",
          price: 99,
          quantity: 0
        }
      ],
    northindian:[
        {
          id: 19,
          itemName: "Butter Chicken",
          price: 99,
          quantity: 0
        },
        {
          id: 20,
          itemName: "Paneer Tikka",
          price: 99,
          quantity: 0
        },
        {
          id: 21,
          itemName: "Aloo Paratha",
          price: 99,
          quantity: 0
        },
        {
          id: 22,
          itemName: "Chole Bhature",
          price: 99,
          quantity: 0
        },
        {
          id: 23,
          itemName: "Dal Makhani",
          price: 99,
          quantity: 0
        },
        {
          id: 24,
          itemName: "Tandoori Roti",
          price: 99,
          quantity: 0
        }
      ],
    combos:[
        {
          id: 25,
          itemName: "Chicken Combo",
          price: 99,
          quantity: 0
        },
        {
          id: 26,
          itemName: "Veg Combo",
          price: 99,
          quantity: 0
        },
        {
          id: 27,
          itemName: "Paneer Combo",
          price: 99,
          quantity: 0
        },
        {
          id: 28,
          itemName: "Mutton Combo",
          price: 99,
          quantity: 0
        },
        {
          id: 29,
          itemName: "Tandoori Combo",
          price: 99,
          quantity: 0
        },
        {
          id: 30,
          itemName: "Rice Combo",
          price: 99,
          quantity: 0
        }
      ],
      
    drinks:[
        {
          id: 31,
          itemName: "Coca-Cola",
          price: 50,
          quantity: 0
        },
        {
          id: 32,
          itemName: "Pepsi",
          price: 50,
          quantity: 0
        },
        {
          id: 33,
          itemName: "Sprite",
          price: 50,
          quantity: 0
        },
        {
          id: 34,
          itemName: "Mountain Dew",
          price: 50,
          quantity: 0
        },
        {
          id: 35,
          itemName: "Fanta",
          price: 50,
          quantity: 0
        },
        {
          id: 36,
          itemName: "Lemon Iced Tea",
          price: 70,
          quantity: 0
        }
      ]
      
}