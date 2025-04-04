import { api } from "encore.dev/api";
import { GetPatientService, PatientServic } from "./patient.entity";
import { sql } from "drizzle-orm";
import { db } from "../src/libs/database/database";
import { configDotenv } from "dotenv";
configDotenv()
export const findPatient = api({ path: '/find-patient', method: "POST", expose: true }, async ({ serviceType, visitNumber }: GetPatientService): Promise<PatientServic> => {


    const a = await (await db.execute(sql`SELECT * FROM pg_stat_activity`)).rows


    return { message: '5555555555' }
})


