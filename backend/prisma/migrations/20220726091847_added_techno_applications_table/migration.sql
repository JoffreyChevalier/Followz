/*
  Warnings:

  - Added the required column `techno` to the `Applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `applications` ADD COLUMN `techno` VARCHAR(255) NOT NULL,
    MODIFY `status` VARCHAR(255) NOT NULL DEFAULT 'CV envoyé';
