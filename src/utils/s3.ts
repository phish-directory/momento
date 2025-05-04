import { s3, write, S3Client,S3File  } from "bun";

import "dotenv/config";
// Bun.s3 reads environment variables for credentials   - but I decided to mess it up for this lol
// file() returns a lazy reference to a file on S3

export const screenshotBucket = new Bun.S3Client({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  bucket: process.env.S3_BUCKET_NAME,
  endpoint: process.env.S3_URL,
  sessionToken: process.env.S3_SESSION_TOKEN,
});
