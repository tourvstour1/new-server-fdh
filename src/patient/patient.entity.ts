import { AdpModel } from "../libs/database/model/adp.interface";
import { AerModel } from "../libs/database/model/aer.interface";
import { ChaModel } from "../libs/database/model/cha.interface";
import { ChtModel } from "../libs/database/model/cht.interface";
import { DruModel } from "../libs/database/model/dru.interface";
import { IdxModel } from "../libs/database/model/idx.interface";
import { InsModel } from "../libs/database/model/ins.interface";
import { IopModel } from "../libs/database/model/iop.interface";
import { IpdModel } from "../libs/database/model/ipd.interface";
import { IrfModel } from "../libs/database/model/irf.interface";
import { LabfuModel } from "../libs/database/model/labfu.interface";
import { LvdModel } from "../libs/database/model/lvd.interface";
import { OdxModel } from "../libs/database/model/odx.interface";
import { OopModel } from "../libs/database/model/oop.interface";
import { OpdModel } from "../libs/database/model/opd.interface";
import { OrfModel } from "../libs/database/model/orf.interface";
import { PatModel } from "../libs/database/model/pat.interface";
import { PhdbModel } from "../libs/database/model/phdb.interface";

export interface GetPatientService {
  hospitalCode: string
  vn: string;
}

export interface PatientServiceOpdResponst {
  hospitalCode: string;
  data?: {
    adp: AdpModel;
    aer: AerModel;
    cha: ChaModel;
    cht: ChtModel;
    dru: DruModel;
    ins: InsModel;
    labfu: LabfuModel;
    odx: OdxModel;
    oop: OopModel;
    opd: OpdModel;
    orf: OrfModel;
    pat: PatModel;
    phdb: PhdbModel;
  };
  error?: string
}

export interface PatientServiceIpdResponst {
  hospitalCode: string;
  data?: {
    adp: AdpModel;
    aer: AerModel;
    cha: ChaModel;
    cht: ChtModel;
    dru: DruModel;
    idx: IdxModel;
    ins: InsModel;
    iop: IopModel;
    ipd: IpdModel;
    irf: IrfModel;
    lvd: LvdModel;
    pat: PatModel;
    phdb: PatModel;
  };
}
