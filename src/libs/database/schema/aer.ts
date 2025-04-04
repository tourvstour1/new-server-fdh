import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const aer = pgTable("aer", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  an: text("an"),
  dateopd: text("dateopd"),
  authae: text("authae"),
  aedate: text("aedate"),
  aetime: text("aetime"),
  aetype: text("aetype"),
  refer_no: text("refer_no"),
  refmaini: text("refmaini"),
  ireftype: text("ireftype"),
  refmaino: text("refmaino"),
  oreftype: text("oreftype"),
  ucae: text("ucae"),
  emtype: text("emtype"),
  seq: text("seq"),
  aestatus: text("aestatus"),
  dalert: text("dalert"),
  talert: text("talert"),

  status: integer("status").default(1),
});
