var data =[{name:"rashed" , password:"123"},{name:"ali" , password:"456"}]
var d =["/","*","+","-","$","#","&","!","%"]
var object = {};

     var u = document.getElementById("username");
     var p = document.getElementById("pw");
     for ( var x = 0 ; x < data.length ; x++ )
     {
        if (u.value === data[x].name && p.value === data[x].password )
        {
            object.key = data[x].name ;
            object.key = data[x].password;

        }
     }
          
     

 function clicked ()
 {
     
     var user = document.getElementById("username");
     var pass = document.getElementById("pw");
     

     

         if (user.value === data.name && pass.value === data.password )
         {
             
            window.location = "project_2_test.html";
           
            break;
         }
         
        if (user.value !== data.name || pass.value !== data.password )
         {
             console.log("Incorrect Username or Password")
             
         } 
    


    
}



/*
$(document).ready(function() {
      var un;
    $('#username').change(function () {
        
       un = $("#username").val();
        console.log(un)
        
    })
    });
 */
 

 
 //console.log(un.value);
 
 

 /*un.onkeyup =  function() {
   
    var b = un.value;
     if (data.name === un.value && data.password === pw.value)
         {
             console.log("hello");

         }else{
             console.log("hi");
            
         }
         console.log(b, "ana")
         
 };*/


