import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const doctors = sqliteTable("doctors", {
  id: text("id").notNull().primaryKey(),
  user_id: text("user_id").notNull(),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
