-- CreateTable
CREATE TABLE "membros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "estado" TEXT,
    "cidade" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "membros_email_key" ON "membros"("email");
