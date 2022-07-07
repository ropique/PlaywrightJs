const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
// const {test} = require('../utils/test-base');
const {POManager} = require('../pageobjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));


test.describe.configure({mode: 'parallel'});
// test.describe.configure({mode: 'serial'});
test('@user Case 1: wrong username/pass', async ({page})=> 

{
  const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(dataSet.username_wrong, dataSet.password_wrong);
   await loginPage.titleCheck(dataSet.login_page_title);
   await expect(loginPage.errorM).toContainText(dataSet.wrong_credentials_error);
   
   
});

test('@user Case 2: User can log In', async ({page})=> 

{

   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await page.waitForLoadState();
   await loginPage.validLogin(dataSet.username, dataSet.password);
   await expect(page).toHaveTitle(dataSet.user_profile_title);


});

test('@dictionary Case 3: user can open dictionary', async ({page})=> 
{  
        
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.hsk_page();
   // await page.waitForLoadState();
   await expect(page).toHaveTitle(dataSet.hsk_page_title);
   // await loginPage.titleCheck(dataSet.hsk_page_title);
   await page.screenshot({path: 'screens/screen-hsk.png'});
   
   

});

test('@dictionary Case 4: user can filter dicionary page', async ({page})=> 
{  
        
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.hsk_page();
   // await loginPage.dictionary();
   await loginPage.filtering(dataSet.char_example, dataSet.char_eng);
   // await page.waitForLoadState();
   await page.screenshot({path: 'screens/screen-hsk-filtred.png'});
   

});


test('@users Case 5: Verify sign in user can add new post', async ({page})=> 

{

   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.validLogin(dataSet.username, dataSet.password);
   await loginPage.add_post_page();
   await expect(loginPage.add_post_text).toHaveText(dataSet.add_post_text);


});

test('@users Case 6: Verify  user can not add new post if not logged in', async ({page})=> 

{

   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.add_post_page();
   await page.waitForLoadState();
   await expect(loginPage.add_post_error).toHaveText(dataSet.add_post_error_m);


});

test('@searching Case 7: Verify user can make searching', async ({page})=>
{
   const poManager = new POManager(page);
   const loginPage = poManager.getLoginPage();
   await loginPage.main();
   await loginPage.searching(dataSet.search_value_test);
   await page.waitForLoadState();
   await expect(page).toHaveURL("https://www.chinablog.live/search_res/?s="+dataSet.search_value_test);
   await page.screenshot({path: 'screens/search_results.png', fullPage: true});


});