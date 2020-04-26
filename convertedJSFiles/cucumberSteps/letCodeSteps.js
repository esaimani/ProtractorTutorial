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
const letcodeHomePage_1 = require("../cucumberPages/letcodeHomePage");
const cucumber_1 = require("cucumber");
const commanSteps_1 = require("./commanSteps");
const cucumber_2 = require("cucumber");
const chai = require("chai");
const letcodeInputblogPage_1 = require("../cucumberPages/letcodeInputblogPage");
cucumber_2.setDefaultTimeout(60 * 1000);
let lc = new letcodeHomePage_1.letcodeHomePage();
let cs = new commanSteps_1.commanSteps();
let ib = new letcodeInputblogPage_1.letcodeInputblogPage();
var expect = chai.expect;
var assert = chai.assert;
cucumber_1.Given('Launch the {string} Letcode website', (url) => __awaiter(void 0, void 0, void 0, function* () {
    //Launch the "https://letcode.in/" Letcode website
    yield cs.OpenApp(url);
}));
cucumber_1.Given('Navigate to workspace', () => __awaiter(void 0, void 0, void 0, function* () {
    //Navigate to workspace
    yield lc.workspace.click();
}));
cucumber_1.Given('Navigate to Input Blog', () => __awaiter(void 0, void 0, void 0, function* () {
    //Navigate to Input Blog
    yield lc.inputblog.click();
}));
cucumber_1.When('Enter the Firstname {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    //Enter the firstname
    yield ib.firstname.sendKeys(string);
}));
cucumber_1.When('Append a exisiting text {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    //Append a exisiting text
    yield ib.appendtext.sendKeys(string);
}));
cucumber_1.When('Get the textbox value', () => __awaiter(void 0, void 0, void 0, function* () {
    //Get the What is inside the text box value
    yield ib.gettextvalue.getAttribute("value").then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(text);
        //Assertion for the gettext
        expect(text).to.equal("LetCode.in");
        assert.equal(text, "LetCode.in");
    }));
}));
cucumber_1.When('Clear the text', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ib.cleartext.clear();
}));
cucumber_1.When('Verify the Invitable textbox is disabled', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Invitable textbox is : " + (yield ib.invitable.isEnabled()));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0Q29kZVN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY3VjdW1iZXJTdGVwcy9sZXRDb2RlU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzRUFBbUU7QUFDbkUsdUNBQXVDO0FBQ3ZDLCtDQUE0QztBQUM1Qyx1Q0FBNkM7QUFDN0MsNkJBQThCO0FBQzlCLGdGQUE2RTtBQUM3RSw0QkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxFQUFFLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0FBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUd2QixnQkFBSyxDQUFDLHFDQUFxQyxFQUFFLENBQU8sR0FBRyxFQUFFLEVBQUU7SUFDdkQsa0RBQWtEO0lBQ2xELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZ0JBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFTLEVBQUU7SUFDdEMsdUJBQXVCO0lBQ3ZCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7SUFFdkMsd0JBQXdCO0lBQ3hCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDbEQscUJBQXFCO0lBQ3JCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3RELHlCQUF5QjtJQUN6QixNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBUyxFQUFFO0lBRXJDLDJDQUEyQztJQUMzQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLElBQUksRUFBRSxFQUFFO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsMkJBQTJCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXBDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQVMsRUFBRTtJQUU5QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7SUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsSUFBRSxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUEsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==