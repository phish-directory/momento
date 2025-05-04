import "dotenv/config";
// import { drizzle } from "drizzle-orm/bun-sql";
import * as schema from "../db/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
// import * as schema from "./schema";

const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });

// Set up triggers when initializing the database
// schema.setupTriggers(pool).catch(console.error);
export { pool, schema };

// export const db = drizzle(process.env.DATABASE_URL!, {
//   schema,
//   // casing: "camelCase",
// });

// import { screenshots } from "../db/schema";
// export const db = drizzle(process.env.DATABASE_URL!, {
//   screenshots,
//   // casing: "camelCase",
// });


// import { screenshots } from "../db/schema";
// // const newScreenshot = {
// //     url: 'https://example.com',
// //     timestamp: new Date(),
// //     status: 'running',
// //     s3_url: null,
// //   };
// // db.insert(screenshots).values(newScreenshot);
// // values({
// //     domain: sanitizedDomain,
// //     last_checked: new Date(),
// // });

// const newScreenshot = await db.insert(screenshots).values({
//     // id:1,
//     url: 'https://example.com',
//     timestamp: new Date(),
//     status: 'running',
//     s3_url: null,
// });