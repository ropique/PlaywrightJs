const {DashBoard} = require('./DashBoard');
const {LoginPage} = require('./LoginPage');

class POManager 
{
constructor(page)    
{
    this.page = page; 
    this.loginPage = new LoginPage(this.page);
    this.dashBoard = new DashBoard(this.page);
}

getLoginPage()
{
    return this.loginPage;
}


getDashbPage()
{
    return this.dashBoard;
}

}

module.exports = {POManager};