-- CreateTable
CREATE TABLE `investment` (
    `FII` VARCHAR(191) NOT NULL,
    `initialValue` INTEGER NOT NULL,
    `numberOfShares` INTEGER NOT NULL,
    `finalValue` INTEGER NOT NULL,

    UNIQUE INDEX `investment_FII_key`(`FII`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
