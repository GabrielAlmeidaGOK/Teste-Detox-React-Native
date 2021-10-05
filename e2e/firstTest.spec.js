describe('Example', () => {
  before(async () => {
    await device.launchApp();
  });


  it('image', async () => {
    await expect(element(by.id('image'))).toBeVisible();
  });


  it('Should have hello text', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });

  const typedText = 'Reduxolvad';


  it('Should type Goker Name', async () => {
    const input = element(by.id('input'));
    await input.typeText(typedText);
  });

  it('Should press on the submit button', async () => {
    await element(by.id('button')).tap();
  });

  it('should have a alert with typed text', async () => {
    await expect(element(by.text(typedText)).atIndex(0)).toBeVisible();
    await element(by.text('OK')).tap();
  });
});
