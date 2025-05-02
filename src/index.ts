// Ideally later just import the routes from src/routes and run them - quick enable/disable of routes that way I guess?
//

import { Elysia, t, file } from 'elysia'

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  // .post("/screenshot", async (ctx) => {
  //   if (typeof ctx.body === 'object' && ctx.body !== null && 'url' in ctx.body) {
  //     const { url } = ctx.body;
  //     await takeFullPageScreenshot(url);
  //     return 'Screenshot taken';
  //   } else {
  //     ctx.status = 400;
  //     return 'Invalid request body. Please provide a "url" property.';
  //   }
  // })


  .post('/mirror', ({ body: { username } }) => username, {
      body: t.Object({
          username: t.String(),
          password: t.String()
      })
  })
  // .post('/screenshot', ({body : {url}})) => takeFullPageScreenshot(url),{
  //   body: t.Object({
  //     url:t.String(),
  //   })
  // })
  .post('/screenshot', async ({ body }) => {
    const { url } = body;
    const screenshot  = await takeFullPageScreenshot(url);
    // return {screenshot : file(screenshot)}
    return "Screenshot made"
  }, {
    body: t.Object({
      url: t.String()
    })
  })
  
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
