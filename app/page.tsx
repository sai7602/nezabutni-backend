'use client';
import { sql } from '@vercel/postgres';
import { useState } from 'react';

export default function Cart(): JSX.Element {
	// const [tableCreated, setTableCreated] = useState(false);
	// const [tableRows, setTableRows] = useState([]);
	// const connectionString = process.env.POSTGRES_URL;
	// const fetchTableRows = async () => {
	// 	try {
	// 		const { rows } = await sql`SELECT * from CARTS`;
	// 		setTableRows(rows);
	// 	} catch (error) {
	// 		console.error('Error fetching table rows:', error);
	// 	}
	// };

	// const createTable = async () => {
	// 	try {
	// 		// await sql`
	// 		//   CREATE TABLE "what_dementia_is_test2" (
	// 		//     id SERIAL PRIMARY KEY,
	// 		//     title TEXT,
	// 		//     description TEXT
	// 		//   )
	// 		// `;
	// 		setTableCreated(true);
	// 		await fetchTableRows();
	// 	} catch (error) {
	// 		console.error('Error creating table:', error);
	// 	}
	// };

	return (
		<div>
			<div>Backend</div>
		</div>
	);
}
