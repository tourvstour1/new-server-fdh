import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const phdb = pgTable("phdb", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  code: text("code"),
  qty: text("qty"),
  price: text("price"),
  an: text("an"),
  seq: text("seq"),
  inscl: text("inscl"),

  status: integer("status").default(1),
});
