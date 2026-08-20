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


function mul(x,y)
{
    return x*y
}

console.log("Multipliactrion",mul(3,4))


 let g=function (x,y)
{
    return x*y
}

console.log("Anoynomous func:",g(1,4))

 let c= (x,y) => { return x*y }

 console.log(c(2,9))

 ((x,y) =>  x*y ) (3,76)