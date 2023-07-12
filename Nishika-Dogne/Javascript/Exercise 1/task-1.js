function task1(){
    let rows = 7;

let string="";
for(let i=1;i<=rows;i++){
    for(let j=1;j<=rows;j++){
        if(i==j|| i+j==rows+1){
            string+= "X";
        }
        else{
            string+="&nbsp";
        }
    }
    string+="<br>";
}
document.getElementById("task").innerHTML=string;
}



