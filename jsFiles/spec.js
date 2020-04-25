
describe('Learn Locator', function () {
    it('Locator Concepts', function () {

        browser.manage().deleteAllCookies();
       //browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');

        browser.getTitle().then(function (result) {
            console.log(result);

        });
        element(by.model('first')).sendKeys(1);

        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        
        element(By.css("h2[class='ng-binding']")).getText().then(function(result){
            console.log("Result is : "+result);
            
        })


    });
});