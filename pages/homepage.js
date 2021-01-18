const { browser } = require("protractor");

let homepage = function(){

    let first_input = element(by.model('first'));
    let second_input = element(by.model('second'));
    let go_button =element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        first_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        second_input.sendKeys(secondNo);
    };
    
    this.clickGo = function(){
        go_button.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result));//locator
        expect(output.getText()).toEqual(result);
    };
};
 module.exports = new homepage();