import Router from 'koa-router';
import user from '../controllers/user.js';

const router = new Router({ prefix: '/user' });

router.get('/userinfo', user.getUserinfo);

export default router;
