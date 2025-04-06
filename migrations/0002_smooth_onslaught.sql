CREATE TABLE "dru" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hospital_code" text NOT NULL,
	"an" text,
	"diag" text,
	"dxtype" text,
	"drdx" text,
	"status" integer DEFAULT 1
);
