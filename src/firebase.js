import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCrQo4Dveo93PunptH3Nfa3hVO1RZuzgAw",
    authDomain: "bchart-cded0.firebaseapp.com",
    databaseURL: "https://bchart-cded0.firebaseio.com",
    projectId: "bchart-cded0",
    storageBucket: "bchart-cded0.appspot.com",
    messagingSenderId: "639627533069",
    appId: "1:639627533069:web:d0afe50822559b08cc2e44",
    measurementId: "G-8CZ6HZDSXV"
  };

  const firebaseApp = firebase.initializeApp(config)

  const firestore = firebaseApp.firestore()
  firestore.settings({ timestampsInSnapshots: true });


  export default firestore