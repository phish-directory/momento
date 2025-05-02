import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const screenshots = pgTable("screenshots", {
  id: integer().primaryKey(),
  url: varchar().notNull(),
  timestamp: timestamp().notNull(),
  status: varchar().notNull(),
  s3_url: varchar(),
});
