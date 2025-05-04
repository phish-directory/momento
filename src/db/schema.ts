// import { serial } from "drizzle-orm/pg-core";
// import { serial } from "drizzle-orm/mysql-core"; // uhm I'm not sure why it's mysql here - did I sleep add this LOL
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const screenshots = pgTable("screenshots", {
  // id: integer().primaryKey(),
  id: serial().primaryKey(),
  url: varchar().notNull(),
  timestamp: timestamp().notNull(),
  // status: varchar().notNull(),
  status: varchar(),
  s3_url: varchar(),
});

