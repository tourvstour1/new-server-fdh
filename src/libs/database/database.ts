import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { configDotenv } from "dotenv";

configDotenv()
const connectionString = process.env.DATABASE_URL
const pool = new pg.Pool({
    connectionString
});


export const db = drizzle({ client: pool });

