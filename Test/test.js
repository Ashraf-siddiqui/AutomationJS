const { By } = require('selenium-webdriver');
//var {describe,it,after,before}=require('selenium-webdriver/testing');
var homepage = require('../Homepage.js');
var chai=require('chai');
var chaiAsPromised=require('chai-as-promised');
var should=chai.should();
chai.use(chaiAsPromised);
const addContext = require('mochawesome/addContext');

var page;

describe('first test case',function(){
    this.timeout(1000000);

beforeEach( function () {
    page = new homepage();
     page.driver.manage().window().maximize();
    page.visit('https://www.google.com/');

    
});



afterEach( async function(){
   await page.quit();
});


it('working with framework', async function(){

  //  page=new Page();
   await page.search('facebook');
   await page.clickOnFirstLink();
  await page.waitforTitle();
   await page.clickOnFirstLink();
   let credentials=await page.returnENabledFields();
   credentials.EmailField.should.be.true;
   credentials.PasswordField.should.be.true;
});


it('working with framework', async function(){

    
     await page.search('facebook');
     await page.clickOnFirstLink();
    await page.waitforTitle();
     await page.clickOnFirstLink();
     let credentials=await page.returnENabledFields();
     
     credentials.EmailField.should.be.false;
     credentials.PasswordField.should.be.false;
    
    

        await page.Onfailure();
        addContext(this,e);
        addContext(this,'../img.png');
    
  });



})