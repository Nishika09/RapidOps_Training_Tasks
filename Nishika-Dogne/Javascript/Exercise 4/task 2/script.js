let form=document.getElementById("form");
let table=document.getElementById("tb");


var selectedRow=null;
form.addEventListener("submit",(e)=>{
e.preventDefault();
if(selectedRow==null){
    onadd();
}
else{
   update ();
}
reset();
})

function onadd(){

    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    // console.log(fname);

    let row=document.createElement("tr"); 
    table.append(row)
    row.insertCell(0).innerHTML=fname;
    row.insertCell(1).innerHTML=lname;
    row.insertCell(2).innerHTML= `<button onClick="onedit(this)" class="edit"> Edit</button>`
    row.insertCell(3).innerHTML= `<button onclick="ondelete(this)" class="delete">Delete</button>`

}

function onedit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
}

function ondelete(td){
    var row = td.parentElement.parentElement;
    document.getElementById("tb").deleteRow(row.rowIndex);
    reset();

}
function reset(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    
}
function update(){
    selectedRow.cells[0].innerHTML=document.getElementById("fname").value;
    selectedRow.cells[1].innerHTML=document.getElementById("lname").value;
}

