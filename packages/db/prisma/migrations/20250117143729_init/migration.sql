-- CreateTable
CREATE TABLE "FoodItem" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "FoodItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FoodItemCategores" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FoodItemCategores_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_FoodItemCategores_B_index" ON "_FoodItemCategores"("B");

-- AddForeignKey
ALTER TABLE "_FoodItemCategores" ADD CONSTRAINT "_FoodItemCategores_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodItemCategores" ADD CONSTRAINT "_FoodItemCategores_B_fkey" FOREIGN KEY ("B") REFERENCES "FoodItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
