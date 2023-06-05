import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const { id } = request.query;

		const result = await prisma.subMenuCard.findMany({
			where: { cardId: Number(id) },
			include: {
				cardText: true,
				subMenu: {
					include: { dementiaMenu: { select: { menuTitle: true } } },
				},
			},
			// where: { id: Number(id) },
			// include: {
			// 	menuSubTitle: {
			// 		select: {
			// 			SubMenuTitle: true,
			// 			SubMenuId: true,
			// 			SubMenuCards: {
			// 				select: {
			// 					cardText: {
			// 						select: {
			// 							cardTextTitle: true,
			// 							cardTextId: true,
			// 						},
			// 					},
			// 					cardTitle: true,
			// 					cardId: true,
			// 				},
			// 			},
			// 		},
			// 	},
			// },
			// select: {
			// 	id: true,
			// 	menuTitle: true,
			// 	shortContent: true,
			// 	 menuSubTitle: true,contentDark:true
			// },
		});

		return response.status(200).json(result);
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: 'Something went wrong' });
	}
}
