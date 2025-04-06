import { api } from "encore.dev/api";
import {
  GetPatientService,
  PatientServiceIpdResponst,
  PatientServiceOpdResponst,
} from "./patient.entity";
import { patientOpd } from "./patient.service";

export const findPatientOpd = api(
  { path: "/find-patient-opd", method: "POST", expose: true },
  async ({
    serviceType,
    visitNumber,
  }: GetPatientService): Promise<PatientServiceOpdResponst> => {
    try {
      return await patientOpd({ serviceType, visitNumber });
    } catch (err) {
      throw err;
    }
  }
);

export const findPatientIpd = api(
  { path: "/find-patient-ipd", method: "POST", expose: true },
  async ({
    serviceType,
    visitNumber,
  }: GetPatientService): Promise<PatientServiceIpdResponst> => {
    try {
      return patientIpd();
    } catch (err) {
      throw err;
    }
  }
);

const patientIpd = async (): Promise<PatientServiceIpdResponst> => {
  return {
    hospitalCode: "11321",
  };
};
