import { Before, After, Status } from "cucumber";
import { STATUS_CODES } from "http";
import { browser } from "protractor";

Before({ tags: "@Letcode"}, function () {
    console.log("Before Method Hook Executed");

});

After({ tags: "@Letcode" }, async function (scenario) {
    console.log("After Method Hook Executed");
    if (scenario.result.status=== Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
});