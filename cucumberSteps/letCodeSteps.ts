import { letcodeHomePage } from "../cucumberPages/letcodeHomePage";
import { Given, When } from "cucumber";
import { commanSteps } from "./commanSteps";
import { setDefaultTimeout } from 'cucumber';
import chai = require("chai");
import { letcodeInputblogPage } from "../cucumberPages/letcodeInputblogPage";
setDefaultTimeout(60 * 1000);

let lc = new letcodeHomePage();
let cs = new commanSteps();
let ib = new letcodeInputblogPage();
var expect = chai.expect;
var assert=chai.assert;


Given('Launch the {string} Letcode website', async (url) => {
    //Launch the "https://letcode.in/" Letcode website
    await cs.OpenApp(url);
});


Given('Navigate to workspace', async () => {
    //Navigate to workspace
    await lc.workspace.click();
});

Given('Navigate to Input Blog', async () => {

    //Navigate to Input Blog
    await lc.inputblog.click();
});

When('Enter the Firstname {string}', async (string) => {
    //Enter the firstname
    await ib.firstname.sendKeys(string);
});

When('Append a exisiting text {string}', async (string) => {
    //Append a exisiting text
    await ib.appendtext.sendKeys(string);
});

When('Get the textbox value', async () => {

    //Get the What is inside the text box value
    await ib.gettextvalue.getAttribute("value").then(async (text) => {
        console.log(text);

        //Assertion for the gettext
        expect(text).to.equal("LetCode.in");
        assert.equal(text,"LetCode.in");

    })
});

When('Clear the text', async () => {
    
    await ib.cleartext.clear();
});

When('Verify the Invitable textbox is disabled', async () => {
console.log("Invitable textbox is : "+ await ib.invitable.isEnabled());
});
