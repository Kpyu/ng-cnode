import { initController } from './api';
const router = initController();

export default async (ctx, next) =>
  await router.routes()(ctx, next);
