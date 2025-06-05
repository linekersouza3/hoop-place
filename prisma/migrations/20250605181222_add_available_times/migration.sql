/*
  Warnings:

  - You are about to drop the column `time` on the `AvailableTime` table. All the data in the column will be lost.
  - Added the required column `dayOfWeek` to the `AvailableTime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `AvailableTime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starTime` to the `AvailableTime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableTime" DROP COLUMN "time",
ADD COLUMN     "dayOfWeek" INTEGER NOT NULL,
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "starTime" TEXT NOT NULL;
