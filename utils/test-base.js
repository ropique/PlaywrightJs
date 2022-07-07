const {base} = require('@playwright/test');

exports.test = base.test.extend(
{
testDataForOrder : 
{
    username : "Anush",
    password : "Test1234~",
    username_wrong : "Test",
    password_wrong : "Test"
}

}
)

