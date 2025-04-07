import { getPatientOpd } from "../libs/api/getPatient.provider";
import { GetPatientService, PatientServiceOpdResponst } from "./patient.entity";
import { db } from "../libs/database/database";
import { eq } from "drizzle-orm";
import { opd } from "../libs/database/schema/opd";
import { log } from "console";

export const patientOpd = async ({
  serviceType,
  visitNumber,
}: GetPatientService): Promise<PatientServiceOpdResponst> => {
  const result: PatientServiceOpdResponst = {
    hospitalCode: "11321",
  };
  const findInDatabase = await db.query.opd.findMany({
    where: eq(opd.seq, visitNumber),
  });

  console.log(findInDatabase);

  if (findInDatabase.length > 0) {
  } else {
    const resultApi = (await getPatientOpd(visitNumber)).data;
    result.data = resultApi;
  }

  console.log(result);

  return result;
};
