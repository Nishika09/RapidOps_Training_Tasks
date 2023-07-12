let n= prompt("enter number");
let num=n.split('');
let array="";
let output;
for(let i=1;i<num.length;i++){
    output+=num[i-1];
    if(num[i]%2==0 && num[i+1]==0){
        output+="-";
    }
}  
document.write(output); 