import { browser } from "protractor";

export class commanSteps {

    async OpenApp(url: string) {
        await browser.manage().deleteAllCookies();
        await browser.get(url);
        await browser.manage().window().maximize();
    }
}