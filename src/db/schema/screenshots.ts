//Schema stuff I think?
// image if it's actually so much simpl

import { pgTable, integer, varchar, timestamp} from "drizzle-orm/pg-core";

export const screenshots = pgTable('screenshots', {
  id: integer().primaryKey(),
  url: varchar().notNull(),
  timestamp: timestamp().notNull(),
  status: varchar().notNull(),
  s3_url: varchar()
});
