import { ElementFinder, element, By } from "protractor";

export class letcodeHomePage {

    workspace: ElementFinder;
    inputblog:ElementFinder;
    

    constructor() {
        this.workspace = element(By.xpath("//div[2]/img[1]"));
        this.inputblog=element(By.xpath("//span[.='Inputs']"));
       
    }

}