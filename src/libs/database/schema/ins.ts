import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const ins = pgTable("ins", {
    id: varchar('id').primaryKey(),
    hospital_code: text('hospital_code'),
    hn: text('hn'),
    inscl: text('inscl'),
    subtype: text('subtype'),
    cid: text('cid'),
    hcode: text('hcode'),
    dateexp: text('dateexp'),
    hospmain: text('hospmain'),
    hospsub: text('hospsub'),
    govcode: text('govcode'),
    govname: text('govname'),
    permitno: text('permitno'),
    docno: text('docno'),
    ownrpid: text('ownrpid'),
    ownname: text('ownname'),
    an: text('an'),
    seq: text('seq'),
    subinscl: text('subinscl'),
    relinscl: text('relinscl'),
    htype: text('htype')
});
