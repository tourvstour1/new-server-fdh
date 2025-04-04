import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const pat = pgTable("pat", {
  id: uuid("id").defaultRandom().primaryKey(),
  hospital_code: text("hospital_code").notNull(),
  hcode: text("code"),
  hn: text("hn"),
  changwat: text("changwat"),
  amphur: text("amphur"),
  dob: text("dob"),
  sex: text("sex"),
  marriage: text("marriage"),
  occupa: text("occupa"),
  nation: text("nation"),
  person_id: text("person_id"),
  namepat: text("namepat"),
  title: text("title"),
  fname: text("fname"),
  lname: text("lname"),
  idtype: text("idtype"),
  status: integer("status").default(1),
});
