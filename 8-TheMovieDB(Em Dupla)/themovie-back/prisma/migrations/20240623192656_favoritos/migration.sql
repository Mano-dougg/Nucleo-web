-- CreateTable
CREATE TABLE "Favoritos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Favoritos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Favoritos_title_key" ON "Favoritos"("title");
