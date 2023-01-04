/*
  Warnings:

  - Added the required column `audioId` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comment" ADD COLUMN     "audioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_audioId_fkey" FOREIGN KEY ("audioId") REFERENCES "audio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
