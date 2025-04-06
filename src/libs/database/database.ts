import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { configDotenv } from "dotenv";
import { pat } from "./schema/pat";
import { adp } from "./schema/adp";
import { aer } from "./schema/aer";
import { cha } from "./schema/cha";
import { opd } from "./schema/opd";

configDotenv();
const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({
  connectionString,
});

export const db = drizzle({ client: pool, schema: { adp, aer, cha, opd } });
