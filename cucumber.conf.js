//setting up the standard configuration for cucumber
const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require('@playwright/test');

setDefaultTimeout(60000)

//setting up the before and after hooks
BeforeAll(async function () {
   global.browser = await chromium.launch({
       headless: false,
       slowMo: 1000,
   });

});

// close the browser
AfterAll(async function () {

   await global.browser.close();
});


Before(async function () {
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
   await global.page.close();
   await global.context.close();
});
