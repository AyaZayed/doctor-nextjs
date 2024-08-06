import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").notNull().primaryKey(),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
});

export const gallery = sqliteTable("gallery", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$default(() => randomUUID()),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  before: text("before").notNull(),
  after: text("after").notNull(),
});
