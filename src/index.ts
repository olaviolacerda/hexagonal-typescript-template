class Application {
  private async initServers(): Promise<void> {
    console.log('Starting servers...')
  }

  async start(): Promise<void> {
    await this.initServers();
  }
}

const application = new Application();

setImmediate(async () => {
  await application.start();
  console.log('Application started.')
});
