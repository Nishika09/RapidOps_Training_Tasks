let dt1= new Date("2020-05-03");
let dt2= new Date("2020-05-03");

let year1= dt1.getFullYear();
let year2= dt2.getFullYear();

let month1=dt1.getMonth();
let month2=dt2.getMonth();

let getdays1=dt1.getDate();
let getdays2=dt2.getDate();

if(month1-month2<0){
    year1=year1-1;
    month1=month1+12;

}
document.write(`${year1-year2} years , ${month1-month2} months, ${getdays1-getdays2} days`);
