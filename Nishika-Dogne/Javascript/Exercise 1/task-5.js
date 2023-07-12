function task5(){
    let string="";
    let rows=10;
for(let i=1;i<=rows;i++)
{
    for(let j=1;j<i;j++)
    {
        string+="&nbsp";
    }
    for(let k=i;k<=rows;k++)
    {
        string+=k;
        string+="&nbsp";
    }
    string+="<br>";
}
for(let i=rows-1;i>=1;i--)
{
    for(let j=1;j<i;j++)
    {
        string+="&nbsp";
    }
    for(let k=i;k<=rows;k++)
    {
        string+=k;
        string+="&nbsp";
    }
    string+="<br>";
}
// console.log(string);
document.getElementById("task").innerHTML = string;
}