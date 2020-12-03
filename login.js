function validate(){
  var x = document.getElementById('email').value;
  var y = document.getElementById('pass').value;
  if( x == "geeth.webapps@gmail.com" && y == "p@$$word123" ){
    alert("login successful");
    true;
  }
  else{
    alert("enter valid email and password");
    return false;
  }

}
