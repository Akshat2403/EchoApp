/*
  Warnings:

  - Changed the type of `timestamp` on the `comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "comment" DROP COLUMN "timestamp",
ADD COLUMN     "timestamp" DECIMAL(65,30) NOT NULL;
