/*
  Warnings:

  - The values [pending] on the enum `Booking_Golf_Course_booking_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `booking_golf_course` MODIFY `booking_status` ENUM('cancelled', 'booked') NOT NULL;
