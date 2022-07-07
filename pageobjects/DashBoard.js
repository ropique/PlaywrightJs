const {expect} = require('@playwright/test');

class DashBoard {

constructor(page)
{
   
    this.dictionary_open = page.locator('#hsk_vocab');
    this.filter_by_character = page.locator('#id_character');
    this.filter_by_english = page.locator('#id_english');
    this.submit_filter = page.locator('#submit');
    this.add_post_text = page.locator('body > div.container-fluid > ul > h1');
    this.add_post_error = page.locator('body > div.container-fluid');
    

}

async open_page()
{
    await this.page.goto("https://www.chinablog.live");
    await this.page.waitForLoadState('networkidle');
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



}

module.exports = {DashBoard};