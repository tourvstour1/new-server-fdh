import { configDotenv } from "dotenv";
import { defineConfig } from "drizzle-kit";
configDotenv();

export default defineConfig({
  out: "migrations",
  schema: "./src/libs/database/schema",
  dialect: "postgresql",
  // dbCredentials: {
  //     url: process.env['DATABASE_URL'] as string
  // }
});
