import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const labfu = pgTable("labfu", {
  labfu_id: uuid("labfu_id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hcode: text("hcode"),
  hn: text("hn"),
  person_id: text("person_id"),
  dateserv: text("dateserv"),
  seq: text("seq"),
  labtest: text("labtest"),
  labresult: text("labresult"),

  status: integer("status").default(1),
});
