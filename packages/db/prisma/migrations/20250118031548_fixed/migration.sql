/*
  Warnings:

  - You are about to drop the `_FoodItemCategores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FoodItemCategores" DROP CONSTRAINT "_FoodItemCategores_A_fkey";

-- DropForeignKey
ALTER TABLE "_FoodItemCategores" DROP CONSTRAINT "_FoodItemCategores_B_fkey";

-- DropTable
DROP TABLE "_FoodItemCategores";
