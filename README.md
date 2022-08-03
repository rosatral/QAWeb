Have created a simple test automation project using Playwright and BDD
There's a feature file where I have written the most basic test scenario and have implemented the steps accordingly.

To run the test, simple enter the below on your terminal:

npm run test:e2e tests/features/login.feature

prerequisites:
install playwright in the project's root directory

   npm i -D @playwright/test
   npm i -D playwright 
   npx playwright install
   
more info on playwright installation is available on their page: https://playwright.dev/docs/intro
