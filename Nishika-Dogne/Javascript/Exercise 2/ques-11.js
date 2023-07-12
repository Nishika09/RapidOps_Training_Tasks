let string="This is a string";
let input_string="abc";
let input_pos=prompt("enter input position");

function insert_string(){
array= string.slice(0,input_pos)+input_string+ string.slice(input_pos);
document.write(array);
}
insert_string();