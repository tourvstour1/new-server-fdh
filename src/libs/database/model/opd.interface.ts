export interface OpdModel {
  id: string;
  hospital_code: string;
  hn: string; //เลขประจำตัวผู้ป่วย
  clinic: string;
  dateopd: string;
  timeopd: string;
  seq: string;
  uuc: string;
  detail: string;
  btemp: string;
  sbp: string;
  dbp: string;
  pr: string;
  rr: string;
  optype: string;
  typein: string;
  typeout: string;
  status: number;
}
