import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	console.log(request);
	try {
		// Розпакування даних з запиту
		const {
			menuTitle,
			shortContent,
			linkUrl,
			contentLight,
			contentDark,
			menuSubTitle,
		} = request.body;

		// Очищення даних з таблиць
		// await prisma.cardText.deleteMany();
		// await prisma.subMenuCard.deleteMany();
		// await prisma.subMenu.deleteMany();
		// await prisma.dementiaMenu.deleteMany();
		// Створення нового DementiaMenu
		const newDementiaMenu = await prisma.dementiaMenu.create({
			data: {
				menuTitle,
				shortContent,
				linkUrl,
				contentLight,
				contentDark,
				menuSubTitle: {
					create: menuSubTitle.map((subMenu) => ({
						SubMenuTitle: subMenu.SubMenuTitle,
						SubMenuLinkUrl: subMenu.SubMenuLinkUrl,
						SubMenuCards: {
							create: subMenu.SubMenuCards.map((card) => ({
								cardTitle: card.cardTitle,
								cardLinkUrl: card.cardLinkUrl,
								cardImg: card.cardImg,
								cardText: {
									create: card.cardText.map((text) => ({
										cardTextTitle: text.cardTextTitle,
										cardTextDescription:
											text.cardTextDescription,
									})),
								},
								cardIntroduction: card.cardIntroduction,
								cardIntroductionTitle:
									card.cardIntroductionTitle,
							})),
						},
					})),
				},
			},
			include: {
				menuSubTitle: {
					include: {
						SubMenuCards: {
							include: {
								cardText: true,
							},
						},
					},
				},
			},
		});

		return response.status(200).json(newDementiaMenu);
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: 'Something went wrong' });
	}
}
