CREATE TABLE "adp" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
CREATE TABLE "iop" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"an" text,
	"refer" text,
	"refertype" text,
	"status" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "labfu" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
--> statement-breakpoint
ALTER TABLE "ins" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "ins" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "ins" ALTER COLUMN "hospital_code" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "ins" ADD COLUMN "status" integer DEFAULT 1;