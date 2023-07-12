let stdbtn =document.querySelector("#sub");
stdbtn.addEventListener("click", (e)=>{
        e.preventDefault();
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let age = document.getElementById("age").value;
        let birthday = document.getElementById("birthday").value;
        let places = document.getElementById("place").value;
        let payment = document.getElementById("pay").value;
        let vehicle = document.getElementById("vehicle").value;

        let table = document.getElementById("table");
        let row = table.insertRow(table.length);

        row.insertCell(0).innerHTML = fname;
        row.insertCell(1).innerHTML = lname;
        row.insertCell(2).innerHTML = email;
        row.insertCell(3).innerHTML = age;
        row.insertCell(4).innerHTML = birthday;
        row.insertCell(5).innerHTML = places;
        row.insertCell(6).innerHTML = payment;
        row.insertCell(7).innerHTML = vehicle;
});

// function reset(){
//     document.forms.submit();
//     document.forms.reset();

// }
        



