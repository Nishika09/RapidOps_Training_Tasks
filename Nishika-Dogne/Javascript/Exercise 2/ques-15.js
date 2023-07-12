let operation=prompt(`"operation you want to perform("insert or delete")"`);
let n = prompt("enter position");
let id;
let name;
let age;
let array=[{
    Id:1,
    name:"nishika",
    Age:21
},
{
    Id:2,
    name:"abc",
    Age:24
},

{
    Id:3,
    name:"xyz",
    Age:30
},
{
    Id:4,
    name:"kjh",
    Age:13
},
{
    Id:5,
    name:"ghj",
    Age:20
},
{
    Id:6,
    name:"mlp",
    Age:34
},
{
    Id:7,
    name:"ftp",
    Age:27
},
{
    Id:8,
    name:"efg",
    Age:19
},
{
    Id:9,
    name:"ujk",
    Age:29
},


];

function insert(arr,n,id,name,age){
    array[n].id=id;
    array[n].name=name;
    array[n].age=age;
    

}
function Delete(arr,n){
    array.splice(n,1);
}


if(operation=="insert"){
    id=prompt("enter id");
    Name=prompt("enter name");
    age=prompt("enter age");
    insert(array,n,id,Name,age);
}
else{
    Delete(array,n);
}


console.log(array);