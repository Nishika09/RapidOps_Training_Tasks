//Time

function startTime(){
    let time= new Date(); 
    let hour= time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    
    document.getElementById("time").innerText="Time"+":"+" "+hour+" :"+minutes+" :"+ seconds;
    setTimeout(startTime,1000);
}

//Date

let date=new Date()
let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
let month = months[date.getMonth()];
(document.getElementById('date').innerText="Date "+":"+" "+date.getDate()+" / "+month+" / "+date.getFullYear())



// let start_btn=document.getElementById(start);
// let stop_btn=document.getElementById(stop);
// let reset_btn=document.getElementById(reset);
// let resume_btn=document.getElementById(resume);


//stopwatch

document.getElementById("start").disabled=false;
document.getElementById("resume").disabled=true;
document.getElementById("stop").disabled=true;
document.getElementById("reset").disabled=true;


let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

let timer = false;

function start(){
    timer=true;
    stopwatch();
    document.getElementById("start").disabled=true;
    document.getElementById("resume").disabled=false;
    document.getElementById("stop").disabled=false;


}
function stop(){
    timer=false;
    document.getElementById("stop").disabled=true;
    document.getElementById("resume").disabled=false;
    document.getElementById("reset").disabled=false;
    


}
function resume(){
    timer=true;
    stopwatch();
    document.getElementById("resume").disabled=true;
    document.getElementById("stop").disabled=true;



}


function reset(){
    timer=false;
    hour=0;
    minute=0;
    second=0;
    count=0;

    document.getElementById("hr").innerHTML="00";
    document.getElementById("sec").innerHTML='00';
    document.getElementById("min").innerHTML='00';
    document.getElementById("count").innerHTML='00';

    document.getElementById("reset").disabled=true;
    document.getElementById("resume").disabled=true;
    document.getElementById("stop").disabled=false;
    
    

}
function stopwatch(){
    if(timer==true){
        count+=1;
        if(count==100){
            second+=1;
            count=0;
        }
        if(sec>59){
            minute+=1;
            sec=0;
        }
        if(minute>59){
            hour+=1;
            minute=0;
        }

        let hrstring=hour;
        let minstring=minute;
        let secstring=second;
        let countstring=count;
        
        if(hour<10){
            hrstring="0"+hrstring;
        }
        if(minute<10){
            minstring="0"+minstring;
        }
        if(second<10){
            secstring="0"+secstring;
        }   
        if(count<10){
            countstring="0"+countstring; 
        }    
        document.getElementById("hr").innerHTML=hrstring;
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("count").innerHTML=countstring;
        setTimeout('stopwatch()',10);

    }

}


  




