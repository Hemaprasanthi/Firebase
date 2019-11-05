function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(user) {
    // user signed in
      if (user) {
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){
        window.location.href = "Hobbies.html";
        // redirect to hobbies.html page
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

      }
    }
 }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function signup(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(user) {
    // user signed in
      if (user) {
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){

        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "New User Created : " + email_id;

      }
    }
 }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function logout(){
  firebase.auth().signOut();
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
}
