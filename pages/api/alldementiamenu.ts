import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

/**
 * @swagger
 * /api/alldementiamenu:
 *   get:
 *     summary: Отримання всіх записів з таблиці
 *     tags: [DementiaMenu]
 *     responses:
 *       200:
 *         description: A User object.
 *         schema:
 *           type: array
 *           properties:
 *             id:
 *               type: integer
 *               example: 4
 *             name:
 *               type: string
 *               example: Arthur Dent
 *
 *
 *
 */
export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const result = await prisma.dementiaMenu.findMany({
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

		return response.status(200).json(result);
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: 'Something went wrong' });
	}
}
