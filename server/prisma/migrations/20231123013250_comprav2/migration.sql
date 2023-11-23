/*
  Warnings:

  - Added the required column `status` to the `Compra` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDENTE', 'PAGO', 'CANCELADO');

-- AlterTable
ALTER TABLE "Compra" ADD COLUMN     "status" "Status" NOT NULL;
