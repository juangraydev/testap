const express = require('express');
const router = express.Router();
const firebase = require('./firebase.js');

router.get('/user', async (req, res, next) => {
    let users = await firebase.firestore().collection('users');
    users.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});

router.post('/login', async (req, res) => {
    console.log(req.body);
    await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);   
        console.log(errorMessage);
        // ...
    });
    res.send(req.body) 
})

router.get('/login', async (req, res) => {
    await firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            res.send(user);
            // ...
        } else {
            // User is signed out.
            res.send('no login');
            // ...
        }
    });

});

router.post('/register', async (req, res) => {
  await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
        res.send('The password is too weak.');
    } else {
        res.send(errorMessage);
    }
  });
  await firebase.auth().onAuthStateChanged( async function(user) {
    if (user) {
      // User is signed in.
      var uid = user.uid;
      let data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userType: req.body.userType
      }

      let setUser = await firebase.firestore().collection('users').doc(uid).set(data);
      res.send(setUser);
      // ...
    }
  }); 
})

router.get('logout', (req, res) => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        res.send('Logout')
    }).catch(function(error) {
        // An error happened.
        res.send('error')
    });  
})

module.exports = router;