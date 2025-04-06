import { getPatientOpd } from "../libs/api/getPatient.provider";
import { GetPatientService, PatientServiceOpdResponst } from "./patient.entity";

export const patientOpd = async ({
  serviceType,
  visitNumber,
}: GetPatientService): Promise<PatientServiceOpdResponst> => {
  const resultApi = (await getPatientOpd(visitNumber)).data;

  const result: PatientServiceOpdResponst = {
    data: resultApi.data,
    hospitalCode: "11321",
  };
  return result;
};
