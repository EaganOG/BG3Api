-- CreateTable
CREATE TABLE "Armour" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "effect1" TEXT NOT NULL,
    "effect2" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "ac" INTEGER NOT NULL,
    "proficiency" INTEGER NOT NULL,

    CONSTRAINT "Armour_pkey" PRIMARY KEY ("id")
);
