//calculate points
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
class PointCalculation{

    //loop for each new item addition
constructor(monetaryValue){
    this.monetaryValue = 0; //get from database
    ;
}

DoPointCalculation(){
    var pointsPerItem = monetaryValue * 0.1;
    //counter variable
    
    //submit button on reciever side
    //donor: registered donation, reciever: confirmed donation

    //------rewrites database-------
    //var timestamp = (new Date()).getTime();
    //usersRef.update({
    //‘/someUserKey/lastLogin’: timestamp,
    //‘/adminLogs/logins/anotherUserKey/lastLogin’: timestamp
    ///})
    //------------------------------
    usersRef.update({
        
    }
        )
    //----checks value for database----
    //var ref = firebase.app().database().ref();
    //ref.once(‘value’)
    //.then(function (snap) {
    //console.log(‘snap.val()’, snap.val());
    //});
    //---------------------------------
    //element.click()
    
    
    
}    
}