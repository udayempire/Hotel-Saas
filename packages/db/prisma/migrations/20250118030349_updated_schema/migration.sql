/*
  Warnings:

  - You are about to drop the column `availability` on the `FoodItem` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `FoodItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodItem" DROP COLUMN "availability",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodItem" ADD CONSTRAINT "FoodItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
