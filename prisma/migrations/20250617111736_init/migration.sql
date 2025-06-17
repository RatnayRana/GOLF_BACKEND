/*
  Warnings:

  - You are about to alter the column `password` on the `customer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(60)`.
  - Added the required column `salt` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` ADD COLUMN `salt` VARCHAR(191) NOT NULL,
    MODIFY `password` CHAR(60) NOT NULL;
