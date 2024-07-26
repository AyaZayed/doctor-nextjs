// id
// patient_id
// doctor_id
// time
// date
// created_at

import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const appointments = sqliteTable("appointments", {
  id: text("id").notNull().primaryKey(),
  patient_id: text("patient_id").notNull(),
  doctor_id: text("doctor_id").notNull(),
  time: text("time").notNull(),
  date: text("date").notNull(),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
