import { instance } from "./axios";

export const getPatientOpd = async (seq: string) => {
  return await instance.post("/edit-16f/get-pat-opd", {
    seq,
  });
};
