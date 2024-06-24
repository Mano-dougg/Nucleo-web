-- CreateTable
CREATE TABLE "Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "breads_qt" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "deleted_flag" BOOLEAN NOT NULL
);
