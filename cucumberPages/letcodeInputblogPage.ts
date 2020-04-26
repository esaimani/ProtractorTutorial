import { ElementFinder, element, By } from "protractor";

export class letcodeInputblogPage {
    firstname: ElementFinder;
    appendtext: ElementFinder;
    gettextvalue: ElementFinder;
    cleartext: ElementFinder;
    invitable: ElementFinder;
    constructor() {

        this.firstname = element(By.id("fullName"));
        this.appendtext = element(By.id("join"));
        this.gettextvalue=element(By.id("getMe"));
        this.cleartext = element(By.id("clearMe"));
        this.invitable = element(By.id("noEdit"));

    }

}
