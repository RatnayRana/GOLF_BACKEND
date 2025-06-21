/*
  Warnings:

  - You are about to drop the column `endTime` on the `booking_golf_course` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `booking_golf_course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `booking_golf_course` DROP COLUMN `endTime`,
    DROP COLUMN `startTime`;
