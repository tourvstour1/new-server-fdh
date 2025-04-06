import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const idx = pgTable("idx", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  an: text("an"),
  diag: text("diag"),
  dxtype: text("dxtype"),
  drdx: text("drdx"),

  status: integer("status").default(1),
});
