require('chromedriver');
const webdriver = require('selenium-webdriver');
const until=webdriver.until;
const By=webdriver.By;
var basepage=require('./basepage.js');


var UserNameField=By.id("user_name");
var Password=By.id('password');
var facilityfield=By.xpath("//*[@id='facility_id']");
var Role=By.id('role_id');
var LoginButton=By.xpath("//button[text()='Login']");



basepage.prototype.LoginUsingCorrectCredentials()
{





}