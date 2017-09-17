class DataBaseInfo{
    constructor(textBookTitles){
    this.textBookTitles [
    "MicroEconomics 6th ED",
    "Big Java, Late Objects",
    "Transport Phenomena 2nd ED",
    "Materials Science and Engineering"];
        
    }
    
    doDataBaseInput(){
    var n;
    for (n = 0; n < 4; step++) {
    var usersRef = ref.child(‘users’);
    // Create a new ref and log it’s push key
    var userRef = usersRef.push();
    // Create a new ref and save data to it in one step
    var userRef = usersRef.push({
     name: textBookTitles[n],
     description: ‘1’
    });
    }
    }
}

<script src="https://www.gstatic.com/firebasejs/3.5.0/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();


 // Get a reference to the storage service, which is used to create
 references in your storage bucket

  var storage = firebase.storage();

</script>