import { GetPatientService, PatientServiceOpdResponst } from "./patient.entity";
import { db } from "../libs/database/database";
import { and, eq } from "drizzle-orm";
import { opd } from "../libs/database/schema/opd";
import { PatientPrivider } from "../libs/api/getPatient.provider";

const patientPrivider = new PatientPrivider()

export const patientOpd = async (parm: GetPatientService): Promise<PatientServiceOpdResponst> => {

  const result: PatientServiceOpdResponst = {
    hospitalCode: parm.hospitalCode,
  };

  const findInDatabase = await db.query.opd.findMany({
    where: and(eq(opd.seq, parm.vn), eq(opd.hospital_code, parm.hospitalCode))
  });


  if (findInDatabase.length > 0) {
  } else {
    const resultApi = (await patientPrivider.getPatientOpd({ hospitalCode: parm.hospitalCode, seq: parm.vn })).data;
    result.data = resultApi;
  }

  console.log(result);

  return result;
};
