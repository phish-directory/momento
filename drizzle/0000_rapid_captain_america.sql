CREATE TABLE "screenshots" (
	"id" integer PRIMARY KEY NOT NULL,
	"url" varchar NOT NULL,
	"timestamp" timestamp NOT NULL,
	"status" varchar NOT NULL,
	"s3_url" varchar
);
