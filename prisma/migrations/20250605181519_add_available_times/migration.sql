/*
  Warnings:

  - You are about to drop the column `starTime` on the `AvailableTime` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `AvailableTime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableTime" DROP COLUMN "starTime",
ADD COLUMN     "startTime" TEXT NOT NULL;
