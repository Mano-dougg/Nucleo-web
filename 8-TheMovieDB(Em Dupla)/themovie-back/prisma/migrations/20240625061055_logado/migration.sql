-- CreateTable
CREATE TABLE "logado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "userid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "logado_username_key" ON "logado"("username");
