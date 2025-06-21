/*
  Warnings:

  - You are about to drop the `golf_course_url` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `golf_course_url` DROP FOREIGN KEY `Golf_Course_Url_golf_courseId_fkey`;

-- AlterTable
ALTER TABLE `customer` MODIFY `roleId` INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE `golf_course_url`;
