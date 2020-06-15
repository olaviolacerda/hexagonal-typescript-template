import { Application } from '../app';

describe('Application', () => {
  it('Should start the application', async () => {
    const application = new Application();
    expect(application.appStarted()).toBeFalsy();
    await application.start();
    expect(application.appStarted()).toBeTruthy();
  });
})
