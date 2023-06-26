/*
  Warnings:

  - You are about to drop the column `finalValue` on the `investment` table. All the data in the column will be lost.
  - Added the required column `totalExpenses` to the `investment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `investment` DROP COLUMN `finalValue`,
    ADD COLUMN `totalExpenses` INTEGER NOT NULL;
