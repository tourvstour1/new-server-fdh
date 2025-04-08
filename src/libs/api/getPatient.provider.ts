import { instance } from "./axios";

interface GetPatientOpdType {
  hospitalCode: string
  seq: string
}

interface GetPatientIpdType {
  hospitalCode: string
  an: string
}

export class PatientPrivider {
  getPatientOpd = async (ob: GetPatientOpdType) => {
    return await instance.post("edit-16f/get-pat-opd", {
      seq: ob.seq
    })
  };

  getPatientIpd = async (ob: GetPatientIpdType) => {
    return await instance.post("edit-16f/get-pat-ipd", {
      ob
    })
  };
}