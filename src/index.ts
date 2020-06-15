import { Application } from './app';
import { Logger } from './utils/logger';

const application = new Application();

setImmediate(async () => {
  await application.start();
  Logger.info('Application started.');
});
