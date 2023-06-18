import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

/**
 * @swagger
 *
 * /api/dementia-third-level-page?id={id}:
 *   get:
 *     tags: [Dementia Menu Ready]
 *     summary: Отримання даних для уніфікованої сторінки другого рівня.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the dementia menu.
 *     responses:
 *       200:
 *         description: Successful response with the list of dementia menus.
 *         content:
 *           application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 cardId:
 *                   type: integer
 *                 cardTitle:
 *                   type: string
 *                 cardLinkUrl:
 *                   type: string
 *                 cardImg:
 *                   type: string
 *                 cardIntroduction:
 *                   type: string
 *                 cardIntroductionTitle:
 *                   type: string
 *                 subMenuId:
 *                   type: integer
 *                 cardText:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       cardTextTitle:
 *                         type: string
 *                       cardTextDescription:
 *                         type: string
 *                       cardTextId:
 *                         type: integer
 *                       subMenuCardId:
 *                         type: integer
 *                 subMenu:
 *                   type: object
 *                   properties:
 *                     dementiaMenu:
 *                       type: object
 *                       properties:
 *                         menuTitle:
 *                           type: string
 *
 *
 *     security: []
 */

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
