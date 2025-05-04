// Ideally later just import the routes from src/routes and run them - quick enable/disable of routes that way I guess?
//
import { Elysia, t, file } from 'elysia'
import screenshotRoutes from './routes/screenshot-routes';
import { swagger} from '@elysiajs/swagger'


const app = new Elysia()
  .use(swagger({
    documentation: {
      info: {
          title: 'Momento Documentation',
          version: '0.0.1'
      },
      tags: [
        { name: 'Screenshots', description: 'General endpoints' },
        // { name: 'Auth', description: 'Authentication endpoints' }
      ]
    }
  }))
  .get("/", () => "Hello Elysia")
  // .use(screenshotRoutes,{
  //   detail: {
  //     tags: ['Auth']
  //   }
  // })
  .use(screenshotRoutes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

