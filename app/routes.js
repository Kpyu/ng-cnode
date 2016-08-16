import { initController } from '../api';

export default async (ctx, next) => {
  if (ctx.path.match(/^\/admin/)) {
    return await initController.routes()(ctx, next);
  }
};
