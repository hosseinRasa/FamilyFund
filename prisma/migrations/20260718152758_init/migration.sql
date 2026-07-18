-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "family" TEXT,
    "age" INTEGER NOT NULL,
    "phone_number" TEXT,
    "account_number" TEXT,
    "role" "Role" NOT NULL,
    "user_created_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");
