-- CreateTable
CREATE TABLE "bread" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "bread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderList" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "finished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "orderList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bread" ADD CONSTRAINT "bread_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orderList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
