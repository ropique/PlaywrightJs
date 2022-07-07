const {expect} = require('@playwright/test');

class LoginPage {

constructor(page)
{
    this.page = page;
    this.signInBtn = page.locator("#sign_in");
    this.userName = page.locator("#id_username");
    this.userPass = page.locator("#id_password");
    this.errorM = page.locator('body > div.container-fluid > div > div');
    this.dictionary_open = page.locator('#hsk_vocab');
    this.filter_by_character = page.locator('#id_character');
    this.filter_by_english = page.locator('#id_english');
    this.submit_filter = page.locator('#submit');
    this.add_post_text = page.locator('body > div.container-fluid > ul > h1');
    this.add_post_error = page.locator('body > div.container-fluid');
    this.search_key = page.locator('xpath=//*[@id="search"]');
    this.search_btn = page.locator('body > nav > ul > form > button');
    

}

async goTo()
{
    await this.page.goto("https://www.chinablog.live/users/login");
    await this.page.waitForLoadState('networkidle');
    
}

async main()
{
    await this.page.goto("https://www.chinablog.live");
    // await this.page.waitForLoadState('networkidle');
}

async add_post_page()
{
    await this.page.goto("https://www.chinablog.live/add_post");
    await this.page.waitForLoadState('networkidle');
}

async hsk_page()
{
    await this.page.goto("https://www.chinablog.live/characters/");
    // await this.page.waitForLoadState('networkidle');
}

async validLogin(username, password)
{
    await  this.userName.type(username);
    await this. userPass.type(password);
    await this.signInBtn.click();
     

}

async searching(search_value)
{
    await  this.search_key.fill(search_value);
    await this.search_btn.click();
     

}

async filtering(character, english)
{
    await this.filter_by_character.type(character);
    await this.filter_by_english.type(english);
    await this.submit_filter.click();
}

async dictionary()
{
    await this.dictionary_open.click();
}

async titleCheck(mytitle)
{
    expect(this.page).toHaveTitle(mytitle);
}

async PrintError ()
{
    await console.log(this.errorM);
}


}



module.exports = {LoginPage};