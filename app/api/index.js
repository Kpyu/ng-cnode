import koaRouter from 'koa-router';
const krouter = koaRouter();

function registerRoutes(routes, router) {
  Object.keys(routes).forEach(function (key) {
    routes[key](router);
  });
}

function test(router) {
  router.get('/test', function (ctx, next) {
    console.log('获取参数', ctx.request.body);
    let { userName, password } = ctx.request.body;
    ctx.body = {
      msg: 'success',
      code: '00000',
      data: 'test'
    };
  });
}



export function initController () {
  krouter.prefix('/api');
  test(krouter);
  return krouter;
}
