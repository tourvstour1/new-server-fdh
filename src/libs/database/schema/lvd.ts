import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const lvd = pgTable("lvd", {
  lvd_id: uuid("lvd_id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  seqlvd: text("seqlvd"),
  an: text("an"),
  dateout: text("dateout"),
  timeout: text("timeout"),
  datein: text("datein"),
  timein: text("timein"),
  qtyday: text("qtyday"),

  status: integer("status").default(1),
});
