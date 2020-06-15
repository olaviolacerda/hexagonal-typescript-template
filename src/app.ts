import { Logger } from './utils/logger';

export class Application {
  private isStarted: boolean;

  constructor() {
    this.isStarted = false;
  }

  appStarted(): boolean {
    return this.isStarted;
  }

  private async initServers(): Promise<void> {
    Logger.info('Starting servers...');
  }

  async start(): Promise<void> {
    await this.initServers();
    this.isStarted = true;
  }
}
