import { Given, When, Then } from "cucumber";
import { calculatorPage } from '../cucumberPages/calculatorPage';
import { By, browser, element } from "protractor";

let calc = new calculatorPage();
Given('Open the Calculator', async () => {
    //clear previous cookies
    await browser.manage().deleteAllCookies();
    //launch http://juliemr.github.io/protractor-demo/ website
    await browser.get('http://juliemr.github.io/protractor-demo/');
    //maximize the browser
    await browser.manage().window().maximize();
});

Given('Enter the two numbers as {string} and {string}', async (string, string2) => {
    //Enter the first number
    await calc.firstEditbox.sendKeys(string);
    //Enter the second number
    await calc.secondEditbox.sendKeys(string2);
});
Given('Enter the two numbers', async () => {

    //Enter the first number
    await calc.firstEditbox.sendKeys(5);
    //Enter the sceond number
    await calc.secondEditbox.sendKeys(10);
});
When('User clicks on Go Button', async () => {
    //Click on Go Button
    await calc.goButton.click();
});
Then('Addition of two numbers should displayed', async () => {
    //fetch the result 
    await element(By.css("td:nth-child(3)")).getText().then(function (text) {
        console.log("Result is : " + text);
    });
});


Given('perform the given operation {string}', async (operation) => {
    //perfrom the given operation
    await calc.calculation(operation);

});




