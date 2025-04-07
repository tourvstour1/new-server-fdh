import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { configDotenv } from "dotenv";
import { pat } from "./schema/pat";
import { adp } from "./schema/adp";
import { aer } from "./schema/aer";
import { cha } from "./schema/cha";
import { opd } from "./schema/opd";
import { cht } from "./schema/cht";
import { dru } from "./schema/dru";
import { idx } from "./schema/idx";
import { ins } from "./schema/ins";
import { iop } from "./schema/iop";
import { ipd } from "./schema/ipd";
import { irf } from "./schema/irf";
import { labfu } from "./schema/labfu";
import { lvd } from "./schema/lvd";
import { odx } from "./schema/odx";
import { oop } from "./schema/oop";
import { orf } from "./schema/orf";
import { phdb } from "./schema/phdb";

configDotenv();
const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({
  connectionString,
});

export const db = drizzle({
  client: pool,
  schema: {
    adp,
    aer,
    cha,
    cht,
    dru,
    idx,
    ins,
    iop,
    ipd,
    irf,
    labfu,
    lvd,
    odx,
    oop,
    opd,
    orf,
    pat,
    phdb,
  },
});
