// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCN6LlN56EbTHeNwPoV8hfNhmZmKojd2OE",
    authDomain: "scarf-pattern-generator.firebaseapp.com",
    databaseURL: "https://scarf-pattern-generator.firebaseio.com",
    projectId: "scarf-pattern-generator",
    storageBucket: "scarf-pattern-generator.appspot.com",
    messagingSenderId: "46984582340"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();


  var user;

  firebase.auth().onAuthStateChanged(function(u) {
    if (u) {
      // User is signed in.
      user = u;
    } else {
      // No user is signed in.
      console.log("no user");
      signInAnonymously();
    }
  });

  function signInAnonymously(){
    firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
