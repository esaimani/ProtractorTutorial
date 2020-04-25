import { ElementFinder, element, By } from "protractor";

export class calculatorPage{
    firstEditbox:ElementFinder;
    secondEditbox:ElementFinder;
    goButton:ElementFinder;

    constructor()
    {
        this.firstEditbox= element(By.model("first"));
        this.secondEditbox=element(By.model("second"));
        this.goButton=element(By.id("gobutton"));
    }
}