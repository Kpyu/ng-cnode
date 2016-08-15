//   神兽护体
//   ┏┓       ┏┓
//  ┏┛┻━━━━━━━┛┻┓
//  ┃           ┃
//  ┃     ━     ┃
//  ┃  ┳┛   ┗┳  ┃
//  ┃           ┃
//  ┃```  ┻  ```┃
//  ┃           ┃
//  ┗━┓      ┏━━┛
//    ┃      ┃   Code is far away from bug with the animal protecting.
//    ┃      ┃   神兽护佑,代码无bug.
//    ┃      ┗━━━┓
//    ┃          ┣┓
//    ┃          ┏┛
//    ┗┓┓┏━━┳┓┏━━┛
//     ┃┫┫  ┃┫┫
//     ┗┻┛  ┗┻┛

import Koa from 'koa';
import Path from 'path';
import bunyanLogger from 'koa-bunyan';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import serve from 'koa-static';
import views from 'koa-views';
import render from 'koa-ejs';
import co from 'co';
import favicon from 'koa-favicon';
import logger from './logger';
const env = process.NODE_ENV || 'development';
const app = new Koa();
app.use(convert(bunyanLogger(logger, {
  level: 'info',
  timeLimit: 250
})));
app.use(favicon(Path.join(__dirname, '..', '/client/favicon.ico')));

// 添加webpack 中间件
// if (Config.env ===  'development') {
//   Config.developmentMiddleWare(app);
// }

// 添加ejs视图解析器
// render(app, Config.view);
app.context.render = co.wrap(app.context.render);

// 添加react渲染器
// renderReact(app, Config.reactConfig);
// app.context.react = co.wrap(app.context.react);


// 添加静态资源服务中间件
app.use(serve('./dist'));


// 添加assets管道
// app.use(assetsPipeLine({
//   manifest: Path.join(__dirname, '..', 'manifest.json'),
//   prepend: ''
// }));

// 添加各种中间件
app.use(bodyParser());

// 注册路由
// app.use(router);
// app.use(router.allowedMethods());
app.listen(3000, function () {
  console.log('Start app listening at http://localhost:%s, environment:%s', 3000, env);
});

