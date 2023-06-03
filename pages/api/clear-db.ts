import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	console.log(request);
	try {
		// Розпакування даних з запиту

		// Очищення даних з таблиць
		const cardText = await prisma.cardText.deleteMany();
		await prisma.subMenuCard.deleteMany();
		await prisma.subMenu.deleteMany();
		await prisma.dementiaMenu.deleteMany();
		// Створення нового DementiaMenu

		return response.status(200).json(cardText);
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: 'Something went wrong' });
	}
}
