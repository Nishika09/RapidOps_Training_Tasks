let array_a=[0,1,2,3];
let array_b=[3,4,5,6];
function union(){
    let set=[...new Set([...array_a,...array_b])];

    document.write(set);
    document.write("<br>");
}


function intersection(){
    let array=[];
   for(let i=0;i<array_a.length;i++){
    for(let j=0;j<array_b.length;j++){
        if(array_a[i]==array_b[j]){
            array.push(array_a[i]);
        }
    }

   }
   document.write(array);

    
}
union();
intersection();