import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const dru = pgTable("dru", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hcode: text("hcode"),
  hn: text("hn"),
  an: text("an"),
  clinic: text("clinic"),
  person_id: text("person_id"),
  date_serv: text("date_serv"),
  did: text("did"),
  didname: text("didname"),
  amount: text("amount"),
  drugprice: text("drugprice"),
  drugcost: text("drugcost"),
  didstd: text("didstd"),
  unit: text("unit"),
  unit_pack: text("unit_pack"),
  seq: text("seq"),
  drugremark: text("drugremark"),
  pa_no: text("pa_no"),
  totcopay: text("totcopay"),
  use_status: text("use_status"),
  total: text("total"),
  sigcode: text("sigcode"),
  sigtext: text("sigtext"),
  provider: text("provider"),
  sp_item: text("sp_item"),

  status: integer("status").default(1),
});
