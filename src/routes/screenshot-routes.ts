import { Elysia, t, file } from 'elysia';
import { getScreenshot} from '../services/screenshot';
import { takeNewScreenshot } from '../services/screenshot';

const screenshotRoutes = new Elysia()
  .post('/screenshot', async ({ body }) => {
    const { url } = body;
    const screenshot = await takeNewScreenshot(url);
    // return {screenshot : file(screenshot)}
    return screenshot;
  }, {
    body: t.Object({
      url: t.String()
    })
  })
  .get('/screenshot/:id', ({ params: { id } }) => getScreenshot(parseInt(id)));

export default screenshotRoutes;

