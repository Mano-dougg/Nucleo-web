-- CreateTable
CREATE TABLE "Favoritos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Favoritos_title_key" ON "Favoritos"("title");
