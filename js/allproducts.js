
function validation(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var cntact = document.getElementById("cntact").value;
    var address = document.getElementById("address").value;
   
    
   
    if(fname=="null" || fname=="" ){
      alert("Please Provide Your First Name!");
    }
    
    else if(lname=="null" || lname==""){
      alert("Please Provide Your Last Name!");
    }
    else if(email=="null" || email==""){
      alert("Please Provide the email address!"); 
    }
    else if(email.length < 8 || email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("You have entered an invalid email address");
    }
    else if(cntact=="null" || cntact==""){
      alert("Please Provide a phone number!");
    }
    
    else if(cntact.length != 10){
         alert("You have entered an invalid phone number");
    }
    else if(address=="null" || address==""){
        alert("Please Provide your address!");
    }
    else if(address.indexOf(",") == -1 || address.length < 7){
        alert("You have entered an invalid address");
    } 
   
    else{
    alert("Dear " +fname+lname+ ", Your order has been requested successfully!! You will recieve an confirmation email to " +email+ " shortly.\n\n\n Thank You for shopping with us!!" );
    }
  }