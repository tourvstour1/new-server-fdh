import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const ipd = pgTable("ipd", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),

  hn: text("hn"),
  an: text("an"),
  dateadm: text("dateadm"),
  timeadm: text("timeadm"),
  datedsc: text("datedsc"),
  timedsc: text("timedsc"),
  dischs: text("dischs"),
  discht: text("discht"),
  warddsc: text("warddsc"),
  dept: text("dept"),
  adm_w: text("adm_w"),
  uuc: text("uuc"),
  svctype: text("svctype"),

  status: integer("status").default(1),
});
