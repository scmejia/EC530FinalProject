
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDWu2knoK8fLrX5qkQCFJ5RFG2HHBSZQ1M",
    authDomain: "medicalwebsite-6ac7a.firebaseapp.com",
    databaseURL: "https://medicalwebsite-6ac7a-default-rtdb.firebaseio.com",
    projectId: "medicalwebsite-6ac7a",
    storageBucket: "medicalwebsite-6ac7a.appspot.com",
    messagingSenderId: "176774821343",
    appId: "1:176774821343:web:a399799957e4aecb22006a",
    measurementId: "G-869NG7NC3W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);

    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully")
  }

  //signIN function
  function signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
  }

  //signOut
  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var email = user.email;
        alert("Active user "+email);
    }
    else{
        alert("No Active user Found")
    }
  })