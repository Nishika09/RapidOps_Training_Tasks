let form = document.getElementById("form");
let table = document.getElementById("tb");
const set1 = new Set();
var count = 0;

var selectedRow = null;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (selectedRow == null) {
        onadd();
    }
    else {
        update();
    }
    reset();
})

function onadd() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    let row = document.createElement("tr");
    table.append(row)
    row.insertCell(0).innerHTML = `<input type="checkbox" name="formCheck" id="sec2" onclick="Delete(this)" onchange=secchech()>`
    row.insertCell(1).innerHTML = fname;
    row.insertCell(2).innerHTML = lname;
    row.insertCell(3).innerHTML = `<button onClick="onedit(this)" class="edit"> Edit</button>`
    row.insertCell(4).innerHTML = `<button onclick="ondelete(this)" id="del" class="delete"disabled>Delete</button>`

}

function onedit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
}

function ondelete(td) {
    var row = td.parentElement.parentElement;
    document.getElementById("tb").deleteRow(row.rowIndex);
    reset();

}
function reset() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";

}
function update() {
    selectedRow.cells[0].innerHTML = document.getElementById("fname").value;
    selectedRow.cells[1].innerHTML = document.getElementById("lname").value;
}


function selects(ele) {

    var checkboxes = document.getElementsByName("formcheck");
    let table = document.querySelector('#tb');


    for (let i = 2; i < table.childNodes.length; i++) {
        const element = table.childNodes[i];

        let arrTd = element.childNodes;

        console.log(arrTd[0].firstChild);

        let checkBox = arrTd[0].firstChild

        checkBox.checked = ele.checked




    }

    // if (ele.checked) {
    //     for (var i = 0; i < checkboxes.length; i++) {
    //         if (checkboxes[i].type == 'checkbox') {
    //             checkboxes[i].checked = true;
    //             count++;

    //         }
    //     }
    // } else {
    //     for (var i = 0; i < checkboxes.length; i++) {
    //         console.log(i)
    //         if (checkboxes[i].type == 'checkbox') {
    //             checkboxes[i].checked = false;
    //             count--;
    //         }
    //     }
    // }
    document.getElementById('total').innerHTML = ele.checked ? table.childNodes.length - 2: 0;
}

function Delete(ef) {
    ef = ef.parentNode.parentNode.childNodes[4];
    ef = ef.childNodes[0];
    ef.disabled = false;


}
let total = document.getElementById('total')
function secchech() {
    let sb = document.getElementById(sec2);
    if (sb.checked == true) {
        count++;
        total.innerText = count;

    }
    else {
        count--;
        total.innerText = count;

    }
}


function DeleteAll() {
    var table = document.getElementById('tb');
    // var rowCount = table.rows.length;

    for (var i in table.childNodes) {
        let element = document.getElementsByName('check');
        for (let j in element) {
            if (element[j].type == 'checkbox') {
                if (element[j].checked == true) {
                    ondelete(element[j]);

                }
            }

        }

    }
    document.getElementById('total').innerHTML = 0;
    // document.getElementById("sec").checked=false;

}





