import { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

export const setupSwagger = (app: Express) => {
	const options = {
		swaggerDefinition: {
			openapi: '3.0.0',
			info: {
				title: 'Your API Documentation',
				version: '1.0.0',
			},
		},
		apis: ['./api/*.ts'], // Шлях до вашого API-коду, де розміщені ваші функції-обробники
	};

	const specs = swaggerJsdoc(options);

	app.use('/api/docs', swaggerUi.serve);
	app.get('/api/docs', swaggerUi.setup(specs));
};
