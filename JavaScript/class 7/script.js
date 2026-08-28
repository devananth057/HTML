let bal=0

let amt;

function handleBalance(event)
{
    console.log(typeof(event.target.value));
    amt=Number(event.target.value);
}

function deposit()
{
   bal+=amt;
   document.getElementById("balance").innerText = bal;
}

function withdraw()
{
    bal-=amt;
    document.getElementById("balance").innerText= bal;
}