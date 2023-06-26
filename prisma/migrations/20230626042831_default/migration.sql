/*
  Warnings:

  - You are about to alter the column `id` on the `investment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `totalEarnings` to the `investment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `investment_id_key` ON `investment`;

-- AlterTable
ALTER TABLE `investment` ADD COLUMN `totalEarnings` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
