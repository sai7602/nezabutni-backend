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
					select: { dementiaMenu: { select: { menuTitle: true } } },
				},
			},
		});

		return response.status(200).json(result);
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: 'Something went wrong' });
	}
}
