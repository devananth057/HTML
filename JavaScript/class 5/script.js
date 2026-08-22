let a =
{
    name : "deva",
    roll : "24BCS057",
    phone: 1234567,
    Address: 
    {
        Street: "qwerty Street",
        Pincode: 6543123
    }
}

console.log(a.phone)
console.log(a)
console.log(a.Address.Pincode)

a.email="poiuyt@gmail.com"

console.log(a)

const {name,roll,phone,Address} = a

console.log(Address.Street)
let c=0;
const i = setInterval(() => {
    c++
    if(c==10)
    {
        console.log("HAPPY BIRTHDAY ")
        clearInterval(i)
        return;
    }
    else
    {
        console.log(c)
    }
},1000)

let result =Math.floor(Math.random() * 9999)

console.log("OTP :",result)


