// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt7Lojemol-QIPLbj_egRw3TndE_bd8ug",
    authDomain: "firestudy-ce6fc.firebaseapp.com",
    databaseURL: "https://firestudy-ce6fc.firebaseio.com",
    projectId: "firestudy-ce6fc",
    storageBucket: "firestudy-ce6fc.appspot.com",
    messagingSenderId: "821590917647",
    appId: "1:821590917647:web:87ce29331b69e00682d97a",
    measurementId: "G-H3ZCC39CRJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
