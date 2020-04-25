import { Given, When, Then } from "cucumber";
import { calculatorPage } from '../tsPages/calculatorPage';
import { By, browser, element } from "protractor";

let calc = new calculatorPage();
Given('Open the Calculator', async () => {
   await browser.manage().deleteAllCookies();
   await browser.get('http://juliemr.github.io/protractor-demo/');
   await browser.manage().window().maximize();
});

Given('Enter the two numbers as {string} and {string}', async (string, string2) =>{
    await calc.firstEditbox.sendKeys(string);
    await calc.secondEditbox.sendKeys(string2);
  });
Given('Enter the two numbers', async ()=> {
    await calc.firstEditbox.sendKeys(5);
    await calc.secondEditbox.sendKeys(10);
});
When('User clicks on Go Button', async () => {
    await calc.goButton.click();
});
Then('Addition of two numbers should displayed', async () =>{
   await  element(By.css("td:nth-child(3)")).getText().then(function (text) {
        console.log("Result is : "+text);
    });
});


