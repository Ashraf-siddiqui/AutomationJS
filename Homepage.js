require('chromedriver');
const webdriver = require('selenium-webdriver');
const until=webdriver.until;
const By=webdriver.By;
var basepage=require('./basepage.js');
var fs=require('fs');

var input=By.name('q');

var firstLink=By.xpath("//div[@class='yuRUbf']//a//h3[contains(text(),'Log In')]");
   
var UserName=By.id("email");

var Pass=By.id('pass');

basepage.prototype.search=function(keyword)
{

    this.write(input,keyword);
  return  this.pressEnterKey(input);
}

basepage.prototype.clickOnFirstLink=function()
{

  return  this.click(firstLink);
    

}

basepage.prototype.waitforTitle=function()
{
    this.verifyTitle('facebook - Google Search');
}

basepage.prototype.returnENabledFields=async function()
{

    
    return {EmailField : await this.find(UserName).isEnabled(),
    PasswordField : await this.find(Pass).isDisplayed()
    }
}

basepage.prototype.Onfailure=async function()
{
    (await this.driver).takeScreenshot().then(function(data){

        fs.writeFileSync('img.png',data,'base64');

    });
}

module.exports=basepage;















