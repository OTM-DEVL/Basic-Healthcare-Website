
function validateform(){
var x = document.forms["personalform"]["password"].value;
if(x == ""){
alert("Password must be entered.");
return false;
}
}

