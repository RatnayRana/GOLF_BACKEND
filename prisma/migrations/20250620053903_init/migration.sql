-- CreateTable
CREATE TABLE `CarrySet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carrysettname` VARCHAR(191) NOT NULL,
    `availibility` ENUM('available', 'not_availabel') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarrySetUrl` (
    `url` VARCHAR(191) NOT NULL,
    `carrysetId` INTEGER NOT NULL,

    INDEX `CarrySetUrl_carrysetId_idx`(`carrysetId`),
    PRIMARY KEY (`url`, `carrysetId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CarrySetUrl` ADD CONSTRAINT `CarrySetUrl_carrysetId_fkey` FOREIGN KEY (`carrysetId`) REFERENCES `CarrySet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
