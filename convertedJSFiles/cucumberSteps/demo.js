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
const calculatorPage_1 = require("../tsPages/calculatorPage");
const protractor_1 = require("protractor");
let calc = new calculatorPage_1.calculatorPage();
cucumber_1.Given('Open the Calculator', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.manage().deleteAllCookies();
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.Given('Enter the two numbers as {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditbox.sendKeys(string);
    yield calc.secondEditbox.sendKeys(string2);
}));
cucumber_1.Given('Enter the two numbers', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditbox.sendKeys(5);
    yield calc.secondEditbox.sendKeys(10);
}));
cucumber_1.When('User clicks on Go Button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.goButton.click();
}));
cucumber_1.Then('Addition of two numbers should displayed', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.By.css("td:nth-child(3)")).getText().then(function (text) {
        console.log("Result is : " + text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2N1Y3VtYmVyU3RlcHMvZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3Qyw4REFBMkQ7QUFDM0QsMkNBQWtEO0FBRWxELElBQUksSUFBSSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ2hDLGdCQUFLLENBQUMscUJBQXFCLEVBQUUsR0FBUyxFQUFFO0lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMvRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsZ0RBQWdELEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDOUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxnQkFBSyxDQUFDLHVCQUF1QixFQUFFLEdBQVEsRUFBRTtJQUNyQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7SUFDeEMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsMENBQTBDLEVBQUUsR0FBUyxFQUFFO0lBQ3pELE1BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9