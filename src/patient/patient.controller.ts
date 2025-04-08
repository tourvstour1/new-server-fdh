import { api } from "encore.dev/api";
import {
  GetPatientService,
  PatientServiceIpdResponst,
  PatientServiceOpdResponst,
} from "./patient.entity";
import { patientOpd } from "./patient.service";

export const findPatientOpd = api(
  { path: "/find-patient-opd", method: "POST", expose: true },
  async (parm: GetPatientService): Promise<PatientServiceOpdResponst> => {
    try {
      return await patientOpd(parm);
    } catch (err) {
      throw err;
    }
  }
);

// export const findPatientIpd = api(
//   { path: "/find-patient-ipd", method: "POST", expose: true },
//   async (parm: GetPatientService): Promise<PatientServiceIpdResponst> => {
//     try {
//       return await patientOpd(parm);
//     } catch (err) {
//       throw err;
//     }
//   }
// );

