  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvwHgYrXzTWM5rRoUnnL_HHizMTIoWE-0",
    authDomain: "kava-daily-plan.firebaseapp.com",
    databaseURL: "https://kava-daily-plan.firebaseio.com",
    projectId: "kava-daily-plan",
    storageBucket: "kava-daily-plan.appspot.com",
    messagingSenderId: "562633921210"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase