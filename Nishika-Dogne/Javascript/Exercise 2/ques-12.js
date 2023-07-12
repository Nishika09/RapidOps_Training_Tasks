// let input_string="rapidopsSolution";
// let input_length=prompt("enter input length");

// function split(){
//     let str=input_string.split("",input_length);
//     document.write(str);
// };
// split();

let chop = (str, size = str.length) => {
    let arr = [];
    let i = 0;
    
    //iterate the string
    while (i < str.length) {
        //slice the characters of given size
        //and push them in output array
        arr.push(str.slice(i, i + size));
        i = i + size;
    }
  
    return arr;
}
document.write(chop("rapidopssolution",2));