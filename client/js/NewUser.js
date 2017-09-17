//new user
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyD6dCV4zcqNf6A5jOvbsjq17cHYC5Y-XMg",
    authDomain: "ramhacksseason2018.firebaseapp.com",
    databaseURL: "https://ramhacksseason2018.firebaseio.com",
    projectId: "ramhacksseason2018",
    storageBucket: "ramhacksseason2018.appspot.com",
    messagingSenderId: "265390073571"  
};
firebase.initializeApp(config);

class NewUser{
  
  //fields are inside constructor
  constructor(email, credential, currentPoints){
    this.email = email;
    this.credentials = credential;
    this.currentpoints = 0; 
  }
 
  
  add(email, credentials){
    firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  
    // The signed-in user info.
    var user = result.user;
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    });
  }
}