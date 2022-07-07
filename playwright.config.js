// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries : 1,
  workers : 7,
  /* Maximum time one test can run for. */
  timeout: 30 * 10000,
  expect: {

    timeout: 500000
  },

  reporter: 'html',
//   reporter: [["dot"], ["json", { outputFile: "test-result.json" }],
// ['experimental-allure-playwright']],
  // reporter: "allure-playwright",


  projects: [
    {
      name : 'safari',
      use: {

      browserName: 'webkit',
      headless: true,
      slowMo: 50,
      // viewport: null,
      }
    },

    {
      name : 'chromium',
      use: {

      browserName: 'chromium',
      headless: true,
      viewport: {width:1280, height:920},
     
      }
    },
    {
      name : 'mozilla',
      use: {

      browserName: 'firefox',
      headless: true,
      // viewport: null,
      }
    },

  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
 

    
}

module.exports = config;
