CREATE TABLE "screenshots" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" varchar NOT NULL,
	"timestamp" timestamp NOT NULL,
	"status" varchar,
	"s3_url" varchar
);
