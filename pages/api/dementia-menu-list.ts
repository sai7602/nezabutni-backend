import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

/**
 * @swagger
 *
 * /api/dementia-menu-list:
 *   get:
 *     tags: [DementiaMenu]
 *     summary: Отримання списку меню.
 *     responses:
 *       200:
 *         description: Successful response with the list of dementia menus.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   menuTitle:
 *                     type: string
 *                   shortContent:
 *                     type: string
 *                   menuSubTitle:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         SubMenuId:
 *                           type: integer
 *                         SubMenuTitle:
 *                           type: string
 *                         SubMenuLinkUrl:
 *                           type: string
 *                         dementiaMenuId:
 *                           type: integer
 *     security: []
 */

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const result = await prisma.dementiaMenu.findMany({
			select: {
				id: true,
				menuTitle: true,
				shortContent: true,
				menuSubTitle: true,
			},
		});

		return response.status(200).json(result);
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: 'Something went wrong' });
	}
}
