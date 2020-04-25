import { classDemo } from "./classDemo";

let cd=new classDemo(50)
cd.setFirstname("Music");
console.log(cd.getFirstname());

interface Mobile
{
    brand:string,
    wifi:boolean,
    camera:boolean
    model:number

}

function validateMobile(mobile:Mobile)
{
console.log(mobile.brand);
console.log(mobile.camera);
console.log(mobile.wifi);
console.log(mobile.model);

}

let iPhone={
brand:"iPhone",
camera:true,
wifi:true,
model:7
}

validateMobile(iPhone);