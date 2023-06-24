-- CreateTable
CREATE TABLE `investment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FII` VARCHAR(191) NOT NULL,
    `initialValue` INTEGER NOT NULL,
    `numberOfShares` INTEGER NOT NULL,
    `finalValue` INTEGER NOT NULL,

    UNIQUE INDEX `investment_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
