/*
  Warnings:

  - You are about to drop the column `availabilty` on the `FoodItem` table. All the data in the column will be lost.
  - Added the required column `availability` to the `FoodItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodItem" DROP COLUMN "availabilty",
ADD COLUMN     "availability" BOOLEAN NOT NULL;
