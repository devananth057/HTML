const e=document.getElementById("head")
e.innerText="Good";

e.innerHTML="<ul><li>Mark as Read</li></ul>";

newul=document.createElement("ul")
document.body.append(newul);

newli=document.createElement("li")

newul.appendChild(newli)

newli.innerText="Happy"

