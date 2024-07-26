// id
// name
// email
// phone
// created_at
// doctor
// appointments
// payments
// messages

import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { doctors } from "./doctors";

export const patients = sqliteTable("patients", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: integer("phone").notNull(),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  doctor: text("doctor")
    .notNull()
    .references(() => doctors.id),
});
