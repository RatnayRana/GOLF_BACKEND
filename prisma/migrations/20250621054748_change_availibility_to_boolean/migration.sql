-- AlterTable
ALTER TABLE `booking_golf_course` ADD COLUMN `carrySetId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Booking_Golf_Course` ADD CONSTRAINT `Booking_Golf_Course_carrySetId_fkey` FOREIGN KEY (`carrySetId`) REFERENCES `CarrySet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
