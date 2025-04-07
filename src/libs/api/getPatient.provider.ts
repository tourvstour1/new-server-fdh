import { instance } from "./axios";

export class PatientOpd = async (seq: string) => {
  return await instance.post("/edit-16f/get-pat-opd", {
    seq,
  });
};
