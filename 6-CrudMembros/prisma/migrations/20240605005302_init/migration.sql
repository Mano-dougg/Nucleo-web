/*
  Warnings:

  - You are about to drop the column `cidade` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `user` table. All the data in the column will be lost.
  - Added the required column `age` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL
);
INSERT INTO "new_user" ("email", "id") SELECT "email", "id" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
