export class classDemo {

    num: number;
    firstname: string;
    lastname: string;


    constructor(num: number) {
        this.num = num;
    }

    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname: string) {
        this.firstname = firstname;
    }
}

let result = new classDemo(15);
result.setFirstname("Esaimani");
let first: string = result.getFirstname()
console.log(first);

function displayName(firstname: string, lastname: string):void {

    console.log(firstname + lastname);

}
