import Koa from 'koa';
import views from 'koa-views';
import path from 'path'
import router from './server/routes/index.js';
import clientRouter from './server/middlewares/clientRoute.js';

const app = new Koa();

app.use(views(path.resolve(__dirname, 'views/dev'), {map: {html: 'ejs'}}))

app.use(clientRouter);
app.use(router.routes());

export default app;
