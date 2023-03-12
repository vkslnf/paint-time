var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "Your_AuthDomain",
    databaseURL: "YOUR_DATABAE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(config);
  
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBzHp4EgcycYjBJaqOMaxWxkRWo7YzUZzw",
    authDomain: "career-definition.firebaseapp.com",
    projectId: "career-definition",
    storageBucket: "career-definition.appspot.com",
    messagingSenderId: "531232193167",
    appId: "1:531232193167:web:b64dd03232005e9c720efa",
    measurementId: "G-5TY2CWJTPY"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  var messagesRef = firebase.database().ref('contactformmessages');
  
  $('#contactForm').submit(function(e) {
    e.preventDefault();
  
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
  
    $('.success-message').show();
  
    $('#contactForm')[0].reset();
  });
  
  messagesRef.once('value').then((snapshot) => {
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`Name: ${snapshot.val()[key].name}`);
        console.log(`Email: ${snapshot.val()[key].email}`);
        console.log(`Subject: ${snapshot.val()[key].subject}`);
        console.log(`Message: ${snapshot.val()[key].message}`);
    });
  });
  
  