-- DropForeignKey
ALTER TABLE `role` DROP FOREIGN KEY `Role_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermission` DROP FOREIGN KEY `RolePermission_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermission` DROP FOREIGN KEY `RolePermission_roleId_fkey`;

-- DropIndex
DROP INDEX `Role_customerId_fkey` ON `role`;

-- DropIndex
DROP INDEX `RolePermission_permissionId_fkey` ON `rolepermission`;

-- DropIndex
DROP INDEX `RolePermission_roleId_fkey` ON `rolepermission`;

-- AlterTable
ALTER TABLE `customer` MODIFY `password` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
