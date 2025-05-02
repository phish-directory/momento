import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema'
})

// import "dotenv/config";
// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   out: "./drizzle",
//   schema: "./src/db/schema",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });

// // import "dotenv/config";
// // import { drizzle } from "drizzle-orm/bun-sql";
// // import config from "./drizzle.config";

// // export const db = drizzle(config);

// import "dotenv/config";
// import { drizzle } from "drizzle-orm/bun-sql";
// import config from "./drizzle.config";

// import { pgTable, integer, varchar, timestamp} from "drizzle-orm/pg-core";

// const screenshots = pgTable('screenshots', {
//   id: integer().primaryKey(),
//   url: varchar().notNull(),
//   timestamp: timestamp().notNull(),
//   status: varchar().notNull(),
//   s3_url: varchar()
// });

// export const db = drizzle(process.env.DATABASE_URL!, screenshots);
