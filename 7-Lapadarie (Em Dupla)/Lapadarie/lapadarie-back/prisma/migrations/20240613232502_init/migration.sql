-- CreateTable
CREATE TABLE "fila_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quant_paes" INTEGER NOT NULL,
    "valor" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "caixa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quant_fila" INTEGER NOT NULL DEFAULT 0,
    "quant_total_paes" INTEGER NOT NULL DEFAULT 0,
    "valor_total" REAL NOT NULL DEFAULT 0
);
