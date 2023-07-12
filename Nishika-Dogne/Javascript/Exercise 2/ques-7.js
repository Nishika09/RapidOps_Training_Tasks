
let months=["January", "February","March", "April", "May","June", "July", "August",
"September", "October","November","December"];
let dte = prompt();
dte = dte.split("-");

let temp = dte[0];
dte[0]=dte[1];
dte[1]=temp;

dte = dte.join("-");

let d = new Date(dte);

document.write(months[d.getMonth()]);


