"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class classDemo {
    constructor(num) {
        this.num = num;
    }
    getFirstname() {
        return this.firstname;
    }
    setFirstname(firstname) {
        this.firstname = firstname;
    }
}
exports.classDemo = classDemo;
let result = new classDemo(15);
result.setFirstname("Esaimani");
let first = result.getFirstname();
console.log(first);
function displayName(firstname, lastname) {
    console.log(firstname + lastname);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NEZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHNCYXNpY3MvY2xhc3NEZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxTQUFTO0lBT2xCLFlBQVksR0FBVztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWlCO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQWxCRCw4QkFrQkM7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFXLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5CLFNBQVMsV0FBVyxDQUFDLFNBQWlCLEVBQUUsUUFBZ0I7SUFFcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFFdEMsQ0FBQyJ9