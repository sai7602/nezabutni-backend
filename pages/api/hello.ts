import { NextApiRequest, NextApiResponse } from 'next';
/**
 * 
 *
 * components:
 *   hello:
 *     HelloResponse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       products:
 *         type: array
 *         items:
 *           $ref:  '#/definitions/Product'
 *
 *   Product:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       createdBy:
 *         type: object
 *         $ref: '#/definitions/User'
 *       createdAt:
 *         type: Date
 *
 *
 * tags:
 *   - name: Hello
 *     description: A sample of API Group 
 *
 * /hello:
 *   get:
 *     description: A test API
 *     tags: [Hello]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         type: string
 *         description: Echo this name
 *     responses:
 *       201:
 *         description: Sample response
 *         schema:
 *           $ref: '#/components/hello/HelloResponse'

 *
 */

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({
		result: 'hello world',
	});
};

export default handler;
