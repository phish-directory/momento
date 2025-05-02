import { Elysia, t, file } from 'elysia';
import { takeFullPageScreenshot } from '../utils/screenshot';

const screenshotRoutes = new Elysia()
  .post('/screenshot', async ({ body }) => {
    const { url } = body;
    const screenshot = await takeFullPageScreenshot(url);
    // return {screenshot : file(screenshot)}
    return "Screenshot made";
  }, {
    body: t.Object({
      url: t.String()
    })
  });

export default screenshotRoutes;
