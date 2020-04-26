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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@Letcode" }, function () {
    console.log("Before Method Hook Executed");
});
cucumber_1.After({ tags: "@Letcode" }, function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("After Method Hook Executed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJIb29rcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2N1Y3VtYmVyU3RlcHMvY3VjdW1iZXJIb29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFpRDtBQUVqRCwyQ0FBcUM7QUFFckMsaUJBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRTtJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFFL0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLFVBQWdCLFFBQVE7O1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFJLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==