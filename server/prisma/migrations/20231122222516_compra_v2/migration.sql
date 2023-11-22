/*
  Warnings:

  - Added the required column `method` to the `Compra` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Method" AS ENUM ('CREDITO', 'DEBITO', 'DINHEIRO', 'PIX');

-- AlterTable
ALTER TABLE "Compra" ADD COLUMN     "method" "Method" NOT NULL;
