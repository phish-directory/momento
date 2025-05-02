// query.ts
// await db.select().from(users);

import { Browser, chromium, Page } from "playwright";

export async function takeFullPageScreenshot(
  url: string
): Promise<Buffer | undefined> {
  let browser: Browser | null = null;
  let page: Page | null = null;

  try {
    browser = await chromium.launch();
    page = await browser.newPage();

    // Navigate to the URL
    await page.goto(url, { waitUntil: "networkidle" });

    // Get the full page dimensions
    // const { width, height } = await page.evaluate(() => {
    //   return {
    //     width: document.documentElement.scrollWidth,
    //     height: document.documentElement.scrollHeight,
    //   };
    // });

    // Set the viewport size to the full page dimensions
    // await page.setViewportSize({ width, height });

    // Take the full-page screenshot
    // await page.screenshot({ path: 'full-page-screenshot.png', fullPage: true });
    const screenshotBuffer = await page.screenshot({ fullPage: true });

    return screenshotBuffer;
  } catch (error) {
    console.error("Error taking full-page screenshot of ", url, ": ", error);
  } finally {
    if (page) {
      await page.close();
    }
    if (browser) {
      await browser.close();
    }
  }
}

import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

const screenshotTable = pgTable("screenshots", {
  id: varchar("id").primaryKey(),
  url: varchar("url"),
  timestamp: timestamp("timestamp"),
  status: varchar("status"),
  s3ImageUrl: varchar("s3_image_url"),
});

// Example usage that was hastily built
// takeFullPageScreenshot('https://www.example.com');
// const screenshotBuffer = await takeFullPageScreenshot('https://phish.directory');
// if (screenshotBuffer) {
//   Bun.write("test.png", screenshotBuffer);
// } else {
//   console.error("Failed to capture screenshot");
// }
