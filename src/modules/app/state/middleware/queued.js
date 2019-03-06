import queue from './queue';

export default store => next => action => {
  if (action.meta === undefined || !action.meta.queued) return next(action);

  const { delay = 4000 } = action.payload;

  queue.push(() => next(action), () => store.dispatch(action.payload.onFinish()), delay, 500);
};