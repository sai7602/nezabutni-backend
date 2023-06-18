-- CreateTable
CREATE TABLE "DementiaMenu" (
    "id" SERIAL NOT NULL,
    "menuTitle" TEXT NOT NULL,
    "shortContent" TEXT NOT NULL,
    "linkUrl" TEXT NOT NULL,
    "contentLight" TEXT NOT NULL,
    "contentDark" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "page" TEXT NOT NULL DEFAULT '',
    "cardDescription" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "DementiaMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubMenu" (
    "SubMenuId" SERIAL NOT NULL,
    "SubMenuTitle" TEXT NOT NULL,
    "SubMenuLinkUrl" TEXT NOT NULL,
    "dementiaMenuId" INTEGER NOT NULL,

    CONSTRAINT "SubMenu_pkey" PRIMARY KEY ("SubMenuId")
);

-- CreateTable
CREATE TABLE "SubMenuCard" (
    "cardId" SERIAL NOT NULL,
    "cardTitle" TEXT NOT NULL,
    "cardLinkUrl" TEXT NOT NULL,
    "cardImg" TEXT NOT NULL,
    "cardIntroduction" TEXT NOT NULL,
    "cardIntroductionTitle" TEXT NOT NULL,
    "subMenuId" INTEGER NOT NULL,

    CONSTRAINT "SubMenuCard_pkey" PRIMARY KEY ("cardId")
);

-- CreateTable
CREATE TABLE "cardText" (
    "cardTextId" SERIAL NOT NULL,
    "cardTextTitle" TEXT NOT NULL,
    "cardTextDescription" TEXT NOT NULL,
    "subMenuCardId" INTEGER NOT NULL,

    CONSTRAINT "cardText_pkey" PRIMARY KEY ("cardTextId")
);

-- AddForeignKey
ALTER TABLE "SubMenu" ADD CONSTRAINT "SubMenu_dementiaMenuId_fkey" FOREIGN KEY ("dementiaMenuId") REFERENCES "DementiaMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenuCard" ADD CONSTRAINT "SubMenuCard_subMenuId_fkey" FOREIGN KEY ("subMenuId") REFERENCES "SubMenu"("SubMenuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cardText" ADD CONSTRAINT "cardText_subMenuCardId_fkey" FOREIGN KEY ("subMenuCardId") REFERENCES "SubMenuCard"("cardId") ON DELETE RESTRICT ON UPDATE CASCADE;
