const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

Given('the user is on the Facebook login page', async function () {
  await driver.get('https://www.facebook.com/');
});

When('the user enters valid credentials', async function () {
  // Replace 'your_email' and 'your_password' with actual login credentials
  await driver.findElement(By.id('email')).sendKeys('your_email');
  await driver.findElement(By.id('pass')).sendKeys('your_password');
});

When('clicks the login button', async function () {
  await driver.findElement(By.name('login')).click();
});

Then('the user should be logged in successfully', async function () {
  await driver.wait(until.elementLocated(By.id('user_profile')), 5000);
});
