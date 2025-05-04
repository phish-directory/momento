
import { Browser, chromium, Page } from "playwright";
import { eq } from "drizzle-orm";
import { screenshots } from "../db/schema";
import { db } from "../utils/db";
import { screenshotBucket } from "../utils/s3";
import { S3File } from "bun";
import "dotenv/config";


async function takeFullPageScreenshot(
  url: string
): Promise<Buffer> {
  let browser: Browser | null = null;
  let page: Page | null = null;

  try {
    browser = await chromium.launch();
    page = await browser.newPage();

    // Navigate to the URL
    await page.goto(url, { waitUntil: "networkidle" });

    const screenshotBuffer = await page.screenshot({ fullPage: true });

    return screenshotBuffer;
  } catch (error) {
    // console.error("Error taking full-page screenshot of ", url, ": ", error);
    throw new Error(`Failed to take full-page screenshot of ${url}: ${error}`);
  } finally {
    if (page) {
      await page.close();
    }
    if (browser) {
      await browser.close();
    }
  }


}


export async function takeNewScreenshot(url:string){
  // TODO: error handling!
  const screenshot = await createScreenshot(url);
  const [{ id }] = screenshot;
  const s3file: S3File  = screenshotBucket.file("screenshot" + id + ".jpeg");
  const screenshotBuffer=   await takeFullPageScreenshot(url);
  await s3file.write(screenshotBuffer);
  const s3_url =  process.env.S3_URL +"/"+ process.env.S3_BUCKET_NAME + "/" + "screenshot" + id + ".jpeg"
  await editScreenshotS3URL(id, s3_url )
  await updateScreenshotStatus(id, "complete")

  return await getScreenshot(id)
}


async function createScreenshot(url:string) {

  const newScreenshot = await db.insert(screenshots).values({
    // id:1,
    url: url,
    timestamp: new Date(),
    status: 'running',
    s3_url: null,
  }).returning();

  return newScreenshot;
}
// const newScreenshot = await createScreenshot("https://example.com/test2");
// console.log(newScreenshot.id)

async function editScreenshotS3URL(id:number, s3_url: string){
  // TODO: Replace with edit function that takes array
  const screenshot =  await db.update(screenshots)
    .set({ s3_url: s3_url })
    .where(eq(screenshots.id, id)); 
}



async function updateScreenshotStatus(id:number, status:string){
  // TODO: Replace with edit function that takes array
  const screenshot =  await db.update(screenshots)
    .set({ status: status })
    .where(eq(screenshots.id, id)); 

}

export async function getScreenshot(id:number){

  const screenshot = await db.query.screenshots.findFirst({
    where: eq(screenshots.id, id),
  });
  return screenshot;

}

