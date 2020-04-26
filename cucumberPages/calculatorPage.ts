import { ElementFinder, element, By, ElementArrayFinder } from "protractor";

export class calculatorPage{
    firstEditbox:ElementFinder;
    secondEditbox:ElementFinder;
    goButton:ElementFinder;
    goOptions:ElementArrayFinder;

    constructor()
    {
        this.firstEditbox= element(By.model("first"));
        this.secondEditbox=element(By.model("second"));
        this.goButton=element(By.id("gobutton"));
        this.goOptions=element.all(By.tagName("option"))
    }

    async calculation(operation)
    {
        await this.goOptions.each(async (values)=> {
            await values.getAttribute("value").then(function (value) {
                 
                 if (value == operation) {
                     values.click();
                 }
             });
         });
    }
}