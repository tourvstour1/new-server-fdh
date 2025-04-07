import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const cha = pgTable("cha", {
  cha_id: uuid("cha_id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  an: text("an"),
  date: text("date"),
  chrgitem: text("chrgitem"),
  amount: text("amount"),
  person_id: text("person_id"),
  seq: text("seq"),

  status: integer("status").default(1),
});
