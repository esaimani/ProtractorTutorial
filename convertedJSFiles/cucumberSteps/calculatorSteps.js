"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculatorPage_1 = require("../cucumberPages/calculatorPage");
const protractor_1 = require("protractor");
let calc = new calculatorPage_1.calculatorPage();
cucumber_1.Given('Open the Calculator', () => __awaiter(void 0, void 0, void 0, function* () {
    //clear previous cookies
    yield protractor_1.browser.manage().deleteAllCookies();
    //launch http://juliemr.github.io/protractor-demo/ website
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    //maximize the browser
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.Given('Enter the two numbers as {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    //Enter the first number
    yield calc.firstEditbox.sendKeys(string);
    //Enter the second number
    yield calc.secondEditbox.sendKeys(string2);
}));
cucumber_1.Given('Enter the two numbers', () => __awaiter(void 0, void 0, void 0, function* () {
    //Enter the first number
    yield calc.firstEditbox.sendKeys(5);
    //Enter the sceond number
    yield calc.secondEditbox.sendKeys(10);
}));
cucumber_1.When('User clicks on Go Button', () => __awaiter(void 0, void 0, void 0, function* () {
    //Click on Go Button
    yield calc.goButton.click();
}));
cucumber_1.Then('Addition of two numbers should displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    //fetch the result 
    yield protractor_1.element(protractor_1.By.css("td:nth-child(3)")).getText().then(function (text) {
        console.log("Result is : " + text);
    });
}));
cucumber_1.Given('perform the given operation {string}', (operation) => __awaiter(void 0, void 0, void 0, function* () {
    //perfrom the given operation
    yield calc.calculation(operation);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY3VjdW1iZXJTdGVwcy9jYWxjdWxhdG9yU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msb0VBQWlFO0FBQ2pFLDJDQUFrRDtBQUVsRCxJQUFJLElBQUksR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUNoQyxnQkFBSyxDQUFDLHFCQUFxQixFQUFFLEdBQVMsRUFBRTtJQUNwQyx3QkFBd0I7SUFDeEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsMERBQTBEO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMvRCxzQkFBc0I7SUFDdEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLGdEQUFnRCxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzlFLHdCQUF3QjtJQUN4QixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLHlCQUF5QjtJQUN6QixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxnQkFBSyxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtJQUV0Qyx3QkFBd0I7SUFDeEIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyx5QkFBeUI7SUFDekIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVMsRUFBRTtJQUN4QyxvQkFBb0I7SUFDcEIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsMENBQTBDLEVBQUUsR0FBUyxFQUFFO0lBQ3hELG1CQUFtQjtJQUNuQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLHNDQUFzQyxFQUFFLENBQU8sU0FBUyxFQUFFLEVBQUU7SUFDOUQsNkJBQTZCO0lBQzdCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV0QyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=