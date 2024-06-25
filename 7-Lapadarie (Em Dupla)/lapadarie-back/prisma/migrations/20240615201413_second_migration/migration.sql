/*
  Warnings:

  - You are about to alter the column `entry` on the `Counter` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Counter" (
    "idCount" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "peopleSum" INTEGER NOT NULL,
    "breadSum" INTEGER NOT NULL,
    "entry" REAL NOT NULL
);
INSERT INTO "new_Counter" ("breadSum", "entry", "idCount", "peopleSum") SELECT "breadSum", "entry", "idCount", "peopleSum" FROM "Counter";
DROP TABLE "Counter";
ALTER TABLE "new_Counter" RENAME TO "Counter";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
