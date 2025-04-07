import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const iop = pgTable("iop", {
  iop_id: uuid("iop_id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  an: text("an"),
  oper: text("oper"),
  optype: text("optype"),
  dropid: text("dropid"),
  datein: text("datein"),
  timein: text("timein"),
  dateout: text("dateout"),
  timeout: text("timeout"),

  status: integer("status").default(1),
});
