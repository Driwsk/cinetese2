/*
  Warnings:

  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `src` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_email_key";

-- DropIndex
DROP INDEX "Users_name_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "name",
DROP COLUMN "src",
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_nome_key" ON "Users"("nome");
