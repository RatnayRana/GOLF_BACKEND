/*
  Warnings:

  - You are about to alter the column `availibility` on the `caddie` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `caddie` MODIFY `availibility` BOOLEAN NOT NULL;
