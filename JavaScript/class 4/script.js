let arr=[1,2,3,4,5]

for(let i=0;i<arr.length;i++)
{
   console.log(arr[i])
}

arr[2]="Dev"

console.log(arr)


const [a,b,c,d,e] = arr

console.log(a)

let a1=[10,210,30,401,501]

console.log(a1.map(  (items) => items%2==1 ))


console.log( a1.filter( (it) => it%2==0) )


console.log( a1.reduce( (store,curr) => store+curr/a1.length))


a2=[20,310,43,45,765]

console.log([...a1,...a2,456 ])