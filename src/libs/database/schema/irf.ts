import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const irf = pgTable("irf", {
  irf_id: uuid("irf_id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  an: text("an"),
  refer: text("refer"),
  refertype: text("refertype"),

  status: integer("status").default(1),
});
