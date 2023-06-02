// 'use client';
// import { sql } from '@vercel/postgres';
// import { useState } from 'react';

// export default function Cart(): JSX.Element {
// 	// const [tableCreated, setTableCreated] = useState(false);
// 	// const [tableRows, setTableRows] = useState([]);
// 	// const connectionString = process.env.POSTGRES_URL;
// 	// const fetchTableRows = async () => {
// 	// 	try {
// 	// 		const { rows } = await sql`SELECT * from CARTS`;
// 	// 		setTableRows(rows);
// 	// 	} catch (error) {
// 	// 		console.error('Error fetching table rows:', error);
// 	// 	}
// 	// };

// 	// const createTable = async () => {
// 	// 	try {
// 	// 		// await sql`
// 	// 		//   CREATE TABLE "what_dementia_is_test2" (
// 	// 		//     id SERIAL PRIMARY KEY,
// 	// 		//     title TEXT,
// 	// 		//     description TEXT
// 	// 		//   )
// 	// 		// `;
// 	// 		setTableCreated(true);
// 	// 		await fetchTableRows();
// 	// 	} catch (error) {
// 	// 		console.error('Error creating table:', error);
// 	// 	}
// 	// };

// 	return (
// 		<div>
// 			<div>Backend</div>
// 		</div>
// 	);
// }
import { sql } from '@vercel/postgres';
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';

export default async function Cart({
	params,
}: {
	params: { user: string };
}): Promise<JSX.Element> {
	const { rows } = await sql`SELECT * from "SubMenu"`;
	return (
		<div>
			{rows.map((row) => (
				<div key={row.id}>
					asdsadsa{row.id} - {row.menu_title}
				</div>
			))}
		</div>
	);
}
// MENU_TITLE
// SHORT_CONTENT
// LINK_URL
// CONTENT_LIGHT
// export const getStaticProps: GetStaticProps = async () => {
// 	const feed = await prisma.dementiaMenu.findMany({
// 		// where: { published: true },
// 		// include: {
// 		// 	author: {
// 		// 		select: { name: true },
// 		// 	},
// 		// },
// 	});
// 	console.log(feed);
// 	return {
// 		props: { feed },
// 		revalidate: 10,
// 	};
// };
