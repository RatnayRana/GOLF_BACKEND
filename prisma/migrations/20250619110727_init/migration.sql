/*
  Warnings:

  - Added the required column `booking_golf_courseId` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` ADD COLUMN `booking_golf_courseId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Booking_Golf_Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_status` ENUM('pending', 'booked') NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `startTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Caddie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `caddiename` VARCHAR(191) NOT NULL,
    `availibility` ENUM('available', 'not_availabel') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaddieUrl` (
    `url` VARCHAR(191) NOT NULL,
    `caddieId` INTEGER NOT NULL,

    INDEX `CaddieUrl_caddieId_idx`(`caddieId`),
    PRIMARY KEY (`url`, `caddieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_booking_golf_courseId_fkey` FOREIGN KEY (`booking_golf_courseId`) REFERENCES `Booking_Golf_Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaddieUrl` ADD CONSTRAINT `CaddieUrl_caddieId_fkey` FOREIGN KEY (`caddieId`) REFERENCES `Caddie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
