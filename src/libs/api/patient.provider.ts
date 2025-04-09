import { instance } from "./axios";


interface GetPatientOpdModel {
  seq: string
  hospitalCode: string
}

interface GetPatientIpdModel {
  an: string
  hospitalCode: string
}

class PatientProvider {
  getPatientOPd = async (parm: GetPatientOpdModel) => {
    return await instance.post("/edit-16f/get-pat-opd", {
      seq: parm.seq,
    }).then(res => res)
      .catch(err => {
        return err
      })
  };

  getPatientIpd = async (pram: GetPatientIpdModel) => {
    return await instance.post("/edit-16f/get-pat-ipd", {
      pram,
    });
  };
}
export default PatientProvider