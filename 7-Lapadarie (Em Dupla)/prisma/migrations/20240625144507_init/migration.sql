-- CreateTable
CREATE TABLE "Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "breads_qt" INTEGER NOT NULL,
    "total_cost" REAL NOT NULL,
    "deleted_flag" BOOLEAN NOT NULL
);
