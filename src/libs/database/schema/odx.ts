import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const odx = pgTable("odx", {
  odx_id: uuid("odx_id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  datedx: text("datedx"),
  clinic: text("clinic"),
  diag: text("diag"),
  dxtype: text("dxtype"),
  drdx: text("drdx"),
  person_id: text("person_id"),
  seq: text("seq"),

  status: integer("status").default(1),
});
