require('chromedriver');
const webdriver = require('selenium-webdriver');
const until=webdriver.until;
const By=webdriver.By;
const Key=webdriver.Key;

var Page=function()
{

this.driver=new webdriver.Builder().forBrowser('chrome').build();
var driver=this.driver;



this.visit=function(Url){


    return driver.get(Url);

}

this.quit=function(){
    return driver.quit();
    
}



this.find=function(el){
    driver.wait(until.elementLocated(el),50000);
   return driver.findElement(el);

}


this.findAll=function(el)
{
    driver.wait(until.elementLocated(el),50000);
    return driver.findElements(el);
}


this.write=function(el,text)
{
return this.find(el).sendKeys(text);
}

this.verifyTitle=function(text)
{
  return  driver.wait(until.titleIs(text));
}

this.pressEnterKey=function(el){
    return this.find(el).sendKeys(webdriver.Key.ENTER)
}

this.click=function(el){
    return this.find(el).then((el1)=>{el1.click();});
}

this.selectFromADropdown=function(el,option)
{
    var element=this.find(el)

   var Dropdownoption= element.findElement(By.xpath("./option[text='"+option+"']"));

   this.click(Dropdownoption);
}

   


this.PressTab= function(el)
{
    return this.find(el).sendKeys(webdriver.Key.TAB);
}





}

module.exports=Page;