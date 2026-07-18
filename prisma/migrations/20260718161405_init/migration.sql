/*
  Warnings:

  - You are about to drop the column `user_created_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `created_user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_created_id",
ADD COLUMN     "created_user" INTEGER NOT NULL,
ALTER COLUMN "created_date" SET DEFAULT CURRENT_TIMESTAMP;
