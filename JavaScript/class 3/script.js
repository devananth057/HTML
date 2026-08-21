let age=0

if(age>18)
{
    console.log("Eligible for Voting")
}
else if(age==18)
{
   console.log("Partially Eligible")
}
else
{
    console.log("Not Eligible")
}

let days=0

switch(days)
{
    case 1:
        console.log("Monday")
        break
        case 2:
        console.log("Monday")
        break
        case 3:
        console.log("Tuesday")
        break

        case 4:
        console.log("Thursdya")
        break
        case 5:
        console.log("Friday")
        break
        case 6:
        console.log("Saturadyy")
        break
        case 7:
        console.log("Sunday")
        break

        default:
            console.log("not possibkle")
   
}

for(var i=0;i<10;i++)
{
    console.log(i)
}
var i=0
while(i<10)
{
    console.log("while",i)
    i++;
}
var i=10
do
{
  console.log(i)
  i--;

}while(i>0);


function add( x, y)
{
    console.log("Addition of two numbers : ")
    return x*y
}

console.log(add(2,8))

const a =function(x,y) 
{
    console.log("Addition of two numbers : ")
    return x+y

}

console.log(a(2,5))

let b= (x,y) =>  x+y

console.log(" Arrow function : ",b(45,67));

(() => {
    console.log("hello");
})();



