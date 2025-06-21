-- CreateTable
CREATE TABLE `Golf_Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `golf_course_name` VARCHAR(255) NOT NULL,
    `golf_course_location_name` VARCHAR(255) NOT NULL,
    `golf_course_location_description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Golf_Course_Url` (
    `url` VARCHAR(191) NOT NULL,
    `golf_courseId` INTEGER NOT NULL,

    INDEX `Golf_Course_Url_golf_courseId_idx`(`golf_courseId`),
    PRIMARY KEY (`url`, `golf_courseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Golf_Course_Url` ADD CONSTRAINT `Golf_Course_Url_golf_courseId_fkey` FOREIGN KEY (`golf_courseId`) REFERENCES `Golf_Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
