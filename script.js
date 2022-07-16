let username = document.getElementById('username');
let password = document.getElementById('password');
let flag = 1

function validateform() {
  // e.preventDefault();
  // alert("hii")
  if (username.value == '') {
    document.getElementById('usererror').innerHTML = "usernameisempty";
  } else if (username.value.length < 6) {
    document.getElementById('usererror').innerHTML = "username shoud be atleast 6chr";

  } else {
    document.getElementById('usererror').innerHTML = ""
  }

  if (password.value == '') {
    document.getElementById('passerror').innerHTML = "passwordisempty";
  } else {
    document.getElementById('passerror').innerHTML = ""
    // if (flag) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  document.getElementById("user").innerHTML = username.value
  document.getElementById("pass").innerHTML = password.value
  username.value =""
  password.value =""
 
}
