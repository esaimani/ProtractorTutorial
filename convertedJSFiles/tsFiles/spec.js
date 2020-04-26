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
const protractor_1 = require("protractor");
const calculatorPage_1 = require("../cucumberPages/calculatorPage");
describe('Learn Locator', function () {
    it('Locator Concepts', () => __awaiter(this, void 0, void 0, function* () {
        //Delete All Cookies
        yield protractor_1.browser.manage().deleteAllCookies();
        //Launch http://juliemr.github.io/protractor-demo/ website
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //Function to perform Addition
        yield calculation(10, 20, "ADDITION");
        //Function to perform Multiplication
        yield calculation(10, 30, "MULTIPLICATION");
        //Method to print "Finally Done"
        console.log("Finally Done");
        //Fecthing Result from Grid
        yield protractor_1.element.all(protractor_1.By.repeater("result in memory")).each(function (item) {
            item.element(protractor_1.By.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
        });
        //User Defined Functions
        function calculation(num1, num2, operation) {
            return __awaiter(this, void 0, void 0, function* () {
                let calc = new calculatorPage_1.calculatorPage();
                yield calc.firstEditbox.sendKeys(num1.toString());
                yield calc.secondEditbox.sendKeys(num2.toString());
                //element(By.model("operator")).element(By.css("option:nth-child(3)")).click();
                protractor_1.element.all(protractor_1.By.tagName("option")).each(function (values) {
                    values.getAttribute("value").then(function (value) {
                        if (value == operation) {
                            values.click();
                        }
                    });
                });
                yield calc.goButton.click();
            });
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzRmlsZXMvc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCxvRUFBaUU7QUFHakUsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN0QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO1FBRTlCLG9CQUFvQjtRQUNwQixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUUxQywwREFBMEQ7UUFDMUQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBRS9ELDhCQUE4QjtRQUM5QixNQUFNLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLG9DQUFvQztRQUNwQyxNQUFNLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFNUMsZ0NBQWdDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUIsMkJBQTJCO1FBQzNCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILHdCQUF3QjtRQUN4QixTQUFlLFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLFNBQWlCOztnQkFFcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7Z0JBQ2hDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ25ELCtFQUErRTtnQkFDL0Usb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU07b0JBQ25ELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSzt3QkFDN0MsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFOzRCQUNwQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ2xCO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxDQUFDO1NBQUE7SUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==