import { browser, element, By } from 'protractor'
import { calculatorPage } from '../tsPages/calculatorPage';


describe('Learn Locator', function () {
    it('Locator Concepts', async () => {

        await browser.manage().deleteAllCookies();
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await calculation(10, 20, "ADDITION");
        await calculation(10, 30, "MULTIPLICATION");
        console.log("Finally Done");
        await element.all(By.repeater("result in memory")).each(function (item) {
            item.element(By.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
        });

        //User Defined Functions
        async function calculation(num1: Number, num2: Number, operation: string) {

            let calc = new calculatorPage();
            await calc.firstEditbox.sendKeys(num1.toString());
            await calc.secondEditbox.sendKeys(num2.toString());
            //element(By.model("operator")).element(By.css("option:nth-child(3)")).click();
            element.all(By.tagName("option")).each(function (values) {
                values.getAttribute("value").then(function (value) {
                    if (value == operation) {
                        values.click();
                    }
                });
            });
            await calc.goButton.click();
        }
    })
})


