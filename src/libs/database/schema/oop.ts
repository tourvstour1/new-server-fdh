import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const oop = pgTable("oop", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  dateopd: text("dateopd"),
  clinic: text("clinic"),
  oper: text("oper"),
  dropid: text("dropid"),
  person_id: text("person_id"),
  seq: text("seq"),
  servprice: text("servprice"),

  status: integer("status").default(1),
});
