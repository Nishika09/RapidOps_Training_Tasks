function task3(){
    let rows=10;
    let string="";
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=i;j++){
        string+="*";
        }
        string+="<br>";
    }

    for(let i=1;i<=rows-1;i++){
        for(let j=0;j<rows-i;j++){
            string+= "*";
        }
        string+="<br>";
    }
    document.getElementById("task").innerHTML=string;
}


