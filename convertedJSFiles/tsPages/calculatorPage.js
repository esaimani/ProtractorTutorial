"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class calculatorPage {
    constructor() {
        this.firstEditbox = protractor_1.element(protractor_1.By.model("first"));
        this.secondEditbox = protractor_1.element(protractor_1.By.model("second"));
        this.goButton = protractor_1.element(protractor_1.By.id("gobutton"));
    }
}
exports.calculatorPage = calculatorPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90c1BhZ2VzL2NhbGN1bGF0b3JQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsY0FBYztJQUt2QjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQVhELHdDQVdDIn0=