function task2(){
    let rows=10;
let string="&nbsp";
for(let i=0;i<rows;i++){
    for(let j=0;j<rows;j++){
        if(i==0||i==rows-1){
            string+="*";
        }
        else{
            if(j==0||j==rows-1){
                string+="*";
            }
            else{
                string+="&nbsp&nbsp";
            }
        }
    }
    string+="<br>";
}

document.getElementById("task").innerHTML=string;
}


