import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBZ3tMwrmwwTpuJ4MxmiyTwEh0_l_CoL7w",
  authDomain: "photoapp-2f1a0.firebaseapp.com",
  databaseURL: "https://photoapp-2f1a0.firebaseio.com",
  projectId: "photoapp-2f1a0",
  storageBucket: "photoapp-2f1a0.appspot.com",
  messagingSenderId: "137663852731"
};
firebase.initializeApp(config);

const database = firebase.database()

export { database }
