import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const orf = pgTable("orf", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  dateopd: text("dateopd"),
  clinic: text("clinic"),
  refer: text("refer"),
  refertype: text("refertype"),
  seq: text("seq"),
  referdate: text("referdate"),

  status: integer("status").default(1),
});
