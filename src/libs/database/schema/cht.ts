import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const cht = pgTable("cht", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  an: text("an"),
  date: text("date"),
  total: text("total"),
  paid: text("paid"),
  pttype: text("pttype"),
  person_id: text("person_id"),
  seq: text("seq"),
  opd_memo: text("opd_memo"),
  invoice_no: text("invoice_no"),
  invoice_lt: text("invoice_lt"),

  status: integer("status").default(1),
});
