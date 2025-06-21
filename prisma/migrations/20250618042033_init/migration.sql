/*
  Warnings:

  - You are about to drop the column `customerId` on the `role` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_customerId_fkey`;

-- DropIndex
DROP INDEX `Role_customerId_fkey` ON `role`;

-- AlterTable
ALTER TABLE `customer` ADD COLUMN `roleId` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `customerId`;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
