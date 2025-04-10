import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const adp = pgTable("adp", {
  adp_id: uuid("adp_id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  an: text("an"),
  dateopd: text("dateopd"),
  type: text("type"),
  code: text("code"),
  qty: text("qty"),
  rate: text("rate"),
  seq: text("seq"),
  cagcode: text("cagcode"),
  dose: text("dose"),
  ca_type: text("ca_type"),
  serialno: text("serialno"),
  totcopay: text("totcopay"),
  use_status: text("use_status"),
  total: text("total"),
  qtyday: text("qtyday"),
  tmltcode: text("tmltcode"),
  status1: text("status1"),
  bi: text("bi"),
  clinic: text("clinic"),
  itemsrc: text("itemsrc"),
  provider: text("provider"),
  gravida: text("gravida"),
  ga_week: text("ga_week"),
  dcip_e_screen: text("dcip_e_screen"),
  lmp: text("lmp"),
  sp_item: text("sp_item"),

  status: integer("status").default(1),
});
