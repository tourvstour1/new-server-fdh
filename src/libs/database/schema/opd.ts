import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const opd = pgTable("opd", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),
  hn: text("hn"),
  clinic: text("clinic"),
  dateopd: text("dateopd"),
  timeopd: text("timeopd"),
  seq: text("seq"),
  uuc: text("uuc"),
  detail: text("detail"),
  btemp: text("btemp"),
  sbp: text("sbp"),
  dbp: text("dbp"),
  pr: text("pr"),
  rr: text("rr"),
  optype: text("optype"),
  typein: text("typein"),
  typeout: text("typeout"),
  status: integer("status").default(1),
});
