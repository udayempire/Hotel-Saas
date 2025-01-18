import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed data with nested writes
  const data = [
    {
      categoryName: "starters",
      foodItems: [

        { itemName: "Garlic Bread", price: 99, quantity: 0, availability: true },
        { itemName: "Bruschetta", price: 99, quantity: 0, availability: true },
        { itemName: "Onion Rings", price: 99, quantity: 0, availability: true },
        { itemName: "French Fries", price: 99, quantity: 0, availability: true },
        { itemName: "Spring Rolls", price: 99, quantity: 0, availability: true },
        { itemName: "Stuffed Mushrooms", price: 99, quantity: 0, availability: true }

      ]
    },
    {
      categoryName: "chinese",
      foodItems: [

        { itemName: "Egg Roll", price: 99, quantity: 0, availability: true },
        { itemName: "Manchurian", price: 99, quantity: 0, availability: true },
        { itemName: "Hot Soup", price: 99, quantity: 0, availability: true },
        { itemName: "Chow Mein", price: 99, quantity: 0, availability: true },
        { itemName: "Spring Rolls", price: 99, quantity: 0, availability: true },
        { itemName: "White Sauce Pasta", price: 99, quantity: 0, availability: true }

      ]
    },
    {
      categoryName: "sweets",
      foodItems: [

        { itemName: "Lava Cake", price: 99, quantity: 0, availability: true },
        { itemName: "Kaju Barfi", price: 10, quantity: 0, availability: true },
        { itemName: "Gulab Jamun", price: 99, quantity: 0, availability: true },
        { itemName: "Mango Sorbet", price: 99, quantity: 0, availability: true },
        { itemName: "Gajar Halwa", price: 99, quantity: 0, availability: true },
        { itemName: "Cheese Cake", price: 99, quantity: 0, availability: true }

      ]
    },
    {
      categoryName: "northindian",
      foodItems: [
        { itemName: "Butter Chicken", price: 99, quantity: 0, availability: true },
        { itemName: "Paneer Tikka", price: 99, quantity: 0, availability: true },
        { itemName: "Aloo Paratha", price: 99, quantity: 0, availability: true },
        { itemName: "Chole Bhature", price: 99, quantity: 0, availability: true },
        { itemName: "Dal Makhani", price: 99, quantity: 0, availability: true },
        { itemName: "Tandoori Roti", price: 99, quantity: 0, availability: true }

      ]
    },
    {
      categoryName: "combos",
      foodItems: [

        { itemName: "Chicken Combo", price: 99, quantity: 0, availability: true },
        { itemName: "Veg Combo", price: 99, quantity: 0, availability: true },
        { itemName: "Paneer Combo", price: 99, quantity: 0, availability: true },
        { itemName: "Mutton Combo", price: 99, quantity: 0, availability: true },
        { itemName: "Tandoori Combo", price: 99, quantity: 0, availability: true },
        { itemName: "Rice Combo", price: 99, quantity: 0, availability: true }

      ]
    },
    {
      categoryName: "drinks",
      foodItems: [
        { itemName: "Coca-Cola", price: 50, quantity: 0, availability: true },
        { itemName: "Pepsi", price: 50, quantity: 0, availability: true },
        { itemName: "Sprite", price: 50, quantity: 0, availability: true },
        { itemName: "Mountain Dew", price: 50, quantity: 0, availability: true },
        { itemName: "Fanta", price: 50, quantity: 0, availability: true },
        { itemName: "Lemon Iced Tea", price: 70, quantity: 0, availability: true }

      ]
    }
  ];

  // destructuring data -each object gets one categoryName and array of foodItem with object name foodItem
  for (const categoryData of data) {
    const { categoryName, foodItems } = categoryData
    //upserting data
    const category = await prisma.category.upsert({
      where: { categoryName: categoryName },
      update: {},
      create: {
        categoryName: categoryName
      }
    });
    for (const foodItem of foodItems) {
      try {
        await prisma.foodItem.upsert({
          where: { itemName: foodItem.itemName }, 
          update: {}, 
          create: {
            ...foodItem, // Spread food item data like itemName: "Fanta", price: 50, quantity: 0, availability: true
            categoryId: category.id, 
          },
        });
      } catch (err) {
        console.error(err)
      }
    }
  }
  console.log("database seeded successfully")
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  })

  //npx tsx prisma/seed.ts
