/*
  Warnings:

  - Added the required column `url` to the `audio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "audio" ADD COLUMN     "url" TEXT NOT NULL;
