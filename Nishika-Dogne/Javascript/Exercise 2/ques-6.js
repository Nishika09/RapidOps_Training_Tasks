let array=[ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" ,
 "k" , "l" , "m" , "n" , "o" , "p" ,
 "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];

 
 for(let i=0;i<array.length;i+=2)
 {
    array.splice(i,2);

 }
 document.write(array);