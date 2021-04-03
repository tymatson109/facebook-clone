import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiHkhlIEgogYLxQQLFqLvGORelYNDkGq0",
    authDomain: "facebook-clone-50297.firebaseapp.com",
    projectId: "facebook-clone-50297",
    storageBucket: "facebook-clone-50297.appspot.com",
    messagingSenderId: "852336088227",
    appId: "1:852336088227:web:3ea7a1b9c7b35f3b4d5b16",
    measurementId: "G-MECR1DGRYV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;