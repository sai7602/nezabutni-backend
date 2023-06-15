import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

/**
 * @swagger
 *
 * /api/second-page?id={id}:
 *   get:
 *     tags: [DementiaMenu]
 *     summary: Отримання даних для сторінки Що таке деменція.
 *     parameters:
 *       - name: id
 *         in: query
 *         description: ID параметр
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with the list of dementia menus.
 *         content:
 *           application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 menuTitle:
 *                   type: string
 *                 shortContent:
 *                   type: string
 *                 linkUrl:
 *                   type: string
 *                 contentLight:
 *                   type: string
 *                 contentDark:
 *                   type: string
 *                 menuSubTitle:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       SubMenuTitle:
 *                         type: string
 *                       SubMenuId:
 *                         type: integer
 *                       SubMenuCards:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             cardText:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   cardTextTitle:
 *                                     type: string
 *                                   cardTextId:
 *                                     type: integer
 *                             cardTitle:
 *                               type: string
 *                             cardId:
 *                               type: integer
 *     security: []
 */

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const { id } = request.query;
		if (!id || Array.isArray(id)) {
			return response
				.status(400)
				.json({
					error: 'Parameter "id" is required as a single value.',
				});
		}

		const result = await prisma.dementiaMenu.findMany({
			where: { linkUrl: id },
			include: {
				menuSubTitle: {
					select: {
						SubMenuTitle: true,
						SubMenuId: true,
						SubMenuCards: {
							select: {
								cardText: {
									select: {
										cardTextTitle: true,
										cardTextId: true,
									},
								},
								cardTitle: true,
								cardId: true,
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
