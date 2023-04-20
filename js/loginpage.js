let username
let password
function collect(){

   /* storing username and passwords into local storage */
   localStorage.setItem("santhosh","9788445512")       // use santhosh and password 9788445512 for login
   localStorage.setItem("ramesh","8248176784") 

   username =document.getElementById("username").value
   password =document.getElementById("password").value
     
   checkCredentials(username,password)
 
}

 /* Function to check the crenditials */ 
 function checkCredentials(user_name,passwords){ 
 
   if( passwords==localStorage.getItem(user_name) ){
   
    window.open("resume.html","_self")
}
   else{
   
    document.getElementById("msg").innerHTML = "Invalid username/password";
}}