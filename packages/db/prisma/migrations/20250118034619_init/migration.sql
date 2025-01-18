/*
  Warnings:

  - Added the required column `availabilty` to the `FoodItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodItem" ADD COLUMN     "availabilty" BOOLEAN NOT NULL;
