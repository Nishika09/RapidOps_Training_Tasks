
        let stdbtn =document.querySelector("#sub");
        stdbtn.addEventListener("click", (e)=>{
            if(document.forms.forms.ischeckValidity()){
        e.preventDefault();
              let fname = document.getElementById("fn").value;
              let lname = document.getElementById("ln").value;
              let email = document.getElementById("email").value;
              let age = document.getElementById("age").value;
              let birthday = document.getElementById("birthday").value;
              let places = document.getElementById("place").value;
              let payment = document.getElementById("pay").value;
              let vehicle = document.getElementById("vehicle").value;
      
      
              let table = document.getElementById("table");
              let row = table.insertRow(table.length);
      
              row.insertCell(0).innerHTML = fname;
              row.insertCell(1).innerHTML = lname;
              row.insertCell(2).innerHTML = email;
              row.insertCell(3).innerHTML = age;
              row.insertCell(4).innerHTML = birthday;
              row.insertCell(5).innerHTML = places;
              row.insertCell(6).innerHTML = payment;
              row.insertCell(7).innerHTML = vehicle;
            }
      });
    
    
    
  


    //Validation function
    function validate(){
          
    let fname = document.getElementById("fn").value;
    var lname = document.getElementById("ln").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    
    if(fname==''){
        document.getElementById("firstname").innerHTML="**Please fill the First Name field";
        return false;
    }
    if(fname.length <6){
        document.getElementById("firstname").innerHTML="**required with atleast 6 character)";
        return false;  

    }
    if(!isNaN(fname)){
        document.getElementById("firstname").innerHTML="**only characters are allowed)";
        return false;  
    }

    // function validatelname(){
    if(lname==""){
        document.getElementById("lastname").innerHTML="**Please fill the Last Name field";
        return false;
    }
    if(lname.length <6){
        document.getElementById("lastname").innerHTML="**required with atleast 6 character)";
        return false;  

    }
    if(!isNaN(lname)){
        document.getElementById("lastname").innerHTML="**only characters are allowed)";
        return false;  
    }

    

    // function validatemail(){
        if(email==""){
            document.getElementById("mail").innerHTML="**Please fill the Email field";
            return false;
        }
        if(email.indexOf('@')<=0){
            document.getElementById("mail").innerHTML="**invalid position of @ ";
            return false;
        }
        if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
            document.getElementById("mail").innerHTML="**invalid position of .";
            return false;
        }

    // }
    // function validateage(){
        if(age==""){
            document.getElementById("no").innerHTML="**Please fill the Age field";
            return false;
        }
        if(age<13|| age>26){
            document.getElementById("no").innerHTML="**age should be between 13 and 26";
            return false;
        }

    }
    
    
  


      