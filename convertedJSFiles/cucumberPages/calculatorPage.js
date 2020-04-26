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
class calculatorPage {
    constructor() {
        this.firstEditbox = protractor_1.element(protractor_1.By.model("first"));
        this.secondEditbox = protractor_1.element(protractor_1.By.model("second"));
        this.goButton = protractor_1.element(protractor_1.By.id("gobutton"));
        this.goOptions = protractor_1.element.all(protractor_1.By.tagName("option"));
    }
    calculation(operation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.goOptions.each((values) => __awaiter(this, void 0, void 0, function* () {
                yield values.getAttribute("value").then(function (value) {
                    if (value == operation) {
                        values.click();
                    }
                });
            }));
        });
    }
}
exports.calculatorPage = calculatorPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jdWN1bWJlclBhZ2VzL2NhbGN1bGF0b3JQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRFO0FBRTVFLE1BQWEsY0FBYztJQU12QjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFSyxXQUFXLENBQUMsU0FBUzs7WUFFdkIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFPLE1BQU0sRUFBQyxFQUFFO2dCQUN0QyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztvQkFFbEQsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO3dCQUNwQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ2xCO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNSLENBQUM7S0FBQTtDQUNKO0FBekJELHdDQXlCQyJ9