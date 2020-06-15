import { init } from '@somosphi/logger';
import { env } from './env';

export const {
  Logger,
} = init({
  PROJECT_NAME: env.projectName,
  LOG_LEVEL: 'info',
});
