CREATE TABLE "adp" (
	"adp_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"an" text,
	"dateopd" text,
	"type" text,
	"code" text,
	"qty" text,
	"rate" text,
	"seq" text,
	"cagcode" text,
	"dose" text,
	"ca_type" text,
	"serialno" text,
	"totcopay" text,
	"use_status" text,
	"total" text,
	"qtyday" text,
	"tmltcode" text,
	"status1" text,
	"bi" text,
	"clinic" text,
	"itemsrc" text,
	"provider" text,
	"gravida" text,
	"ga_week" text,
	"dcip_e_screen" text,
	"lmp" text,
	"sp_item" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "aer" (
	"aer_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"an" text,
	"dateopd" text,
	"authae" text,
	"aedate" text,
	"aetime" text,
	"aetype" text,
	"refer_no" text,
	"refmaini" text,
	"ireftype" text,
	"refmaino" text,
	"oreftype" text,
	"ucae" text,
	"emtype" text,
	"seq" text,
	"aestatus" text,
	"dalert" text,
	"talert" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "cha" (
	"cha_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"an" text,
	"date" text,
	"chrgitem" text,
	"amount" text,
	"person_id" text,
	"seq" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "cht" (
	"cht_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"an" text,
	"date" text,
	"total" text,
	"paid" text,
	"pttype" text,
	"person_id" text,
	"seq" text,
	"opd_memo" text,
	"invoice_no" text,
	"invoice_lt" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "dru" (
	"dru_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hcode" text,
	"hn" text,
	"an" text,
	"clinic" text,
	"person_id" text,
	"date_serv" text,
	"did" text,
	"didname" text,
	"amount" text,
	"drugprice" text,
	"drugcost" text,
	"didstd" text,
	"unit" text,
	"unit_pack" text,
	"seq" text,
	"drugremark" text,
	"pa_no" text,
	"totcopay" text,
	"use_status" text,
	"total" text,
	"sigcode" text,
	"sigtext" text,
	"provider" text,
	"sp_item" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "idx" (
	"idx_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"an" text,
	"diag" text,
	"dxtype" text,
	"drdx" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "ins" (
	"ins_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"inscl" text,
	"subtype" text,
	"cid" text,
	"hcode" text,
	"dateexp" text,
	"hospmain" text,
	"hospsub" text,
	"govcode" text,
	"govname" text,
	"permitno" text,
	"docno" text,
	"ownrpid" text,
	"ownname" text,
	"an" text,
	"seq" text,
	"subinscl" text,
	"relinscl" text,
	"htype" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "iop" (
	"iop_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"an" text,
	"oper" text,
	"optype" text,
	"dropid" text,
	"datein" text,
	"timein" text,
	"dateout" text,
	"timeout" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "ipd" (
	"ipd_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"an" text,
	"dateadm" text,
	"timeadm" text,
	"datedsc" text,
	"timedsc" text,
	"dischs" text,
	"discht" text,
	"warddsc" text,
	"dept" text,
	"adm_w" text,
	"uuc" text,
	"svctype" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "irf" (
	"irf_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"an" text,
	"refer" text,
	"refertype" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "labfu" (
	"labfu_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hcode" text,
	"hn" text,
	"person_id" text,
	"dateserv" text,
	"seq" text,
	"labtest" text,
	"labresult" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "lvd" (
	"lvd_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"seqlvd" text,
	"an" text,
	"dateout" text,
	"timeout" text,
	"datein" text,
	"timein" text,
	"qtyday" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "odx" (
	"odx_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"datedx" text,
	"clinic" text,
	"diag" text,
	"dxtype" text,
	"drdx" text,
	"person_id" text,
	"seq" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "oop" (
	"oop_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"dateopd" text,
	"clinic" text,
	"oper" text,
	"dropid" text,
	"person_id" text,
	"seq" text,
	"servprice" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "opd" (
	"opd_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"clinic" text,
	"dateopd" text,
	"timeopd" text,
	"seq" text,
	"uuc" text,
	"detail" text,
	"btemp" text,
	"sbp" text,
	"dbp" text,
	"pr" text,
	"rr" text,
	"optype" text,
	"typein" text,
	"typeout" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "orf" (
	"orf_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"dateopd" text,
	"clinic" text,
	"refer" text,
	"refertype" text,
	"seq" text,
	"referdate" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "pat" (
	"pat_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"code" text,
	"hn" text,
	"changwat" text,
	"amphur" text,
	"dob" text,
	"sex" text,
	"marriage" text,
	"occupa" text,
	"nation" text,
	"person_id" text,
	"namepat" text,
	"title" text,
	"fname" text,
	"lname" text,
	"idtype" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "phdb" (
	"phdb_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"hn" text,
	"code" text,
	"qty" text,
	"price" text,
	"an" text,
	"seq" text,
	"inscl" text,
	"status" integer DEFAULT 1
);
