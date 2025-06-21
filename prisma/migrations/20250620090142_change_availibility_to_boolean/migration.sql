/*
  Warnings:

  - You are about to drop the column `booking_golf_courseId` on the `customer` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Booking_Golf_Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `golfCourseId` to the `Booking_Golf_Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `Customer_booking_golf_courseId_fkey`;

-- DropIndex
DROP INDEX `Customer_booking_golf_courseId_fkey` ON `customer`;

-- AlterTable
ALTER TABLE `booking_golf_course` ADD COLUMN `customerId` INTEGER NOT NULL,
    ADD COLUMN `golfCourseId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `customer` DROP COLUMN `booking_golf_courseId`;

-- AddForeignKey
ALTER TABLE `Booking_Golf_Course` ADD CONSTRAINT `Booking_Golf_Course_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking_Golf_Course` ADD CONSTRAINT `Booking_Golf_Course_golfCourseId_fkey` FOREIGN KEY (`golfCourseId`) REFERENCES `Golf_Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
