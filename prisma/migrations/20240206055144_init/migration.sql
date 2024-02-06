-- CreateTable
CREATE TABLE "Flag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "flag" TEXT NOT NULL,

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR(45),
    "capital" VARCHAR(45),

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);
