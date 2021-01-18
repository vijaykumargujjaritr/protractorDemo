// const { browser } = require("protractor");
const { browser, element } = require("protractor");
let homepage = require("../pages/homepage");//like importing 

describe('a test suite',function(){
    it('addition test',function(){

        // browser.get('http://juliemr.github.io/protractor-demo/');
        // browser.sleep(2000);
       
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('5');

        homepage.clickGo();

        homepage.verifyResult('9');

        browser.sleep(2000);
        
    });
});