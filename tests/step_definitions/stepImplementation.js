const {Given, When, Then} = require('@cucumber/cucumber')

//could have really put these locators in a different file and called them here, could have made the code look better
const { expect } = require("@playwright/test");
const url = 'http://localhost:8080'
const homePageHeading = '//*[@id="login"]/h1'
const email = '//*[@id="email"]'
const password = '//*[@id="password"]';
const login = '//input[@id="login"]';
const userLogin = '//*[@id="user"] ';
const logout = '//*[@id="logout"]/span'



Given('I have an application', async function () {
   //have setup a server locally to launch the index.html file on localhost
   await page.goto(url)
   const locator = await page.locator(homePageHeading)
   await expect(locator).toBeVisible()
 });

 When('I login with {string} and {string}', async function (username, pass) {
 //filling up the username and password and clicking on login
   await page.fill(email, username)
   await page.fill(password, pass)
   await page.click(login)
 });

 Then('I can login successfully', async function () {
 //checking if login is successful
   await expect(page.locator(userLogin)).toBeVisible()
 });

 Then('I can logout successfully', async function(){
 //logging out and verifying if logged out successfully
  await page.click(userLogin)
  await page.click(logout)
  await expect(page.locator(homePageHeading)).toBeVisible()

});