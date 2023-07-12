let arr= [0,1,2,3,4,5,6,7,8,9];
let n = +prompt("enter n");

function getfirst(){
document.write(`First ${n} elements:`);
for( let i=0;i<n;i++){
 
 document.write(arr[i]);   
}

}

function getlast(){
document.write(`last ${n} elements:`)
for(let j=arr.length-1;j>=arr.length-n;j--){
   
document.write(arr[j]);
}

}
getfirst();
getlast();