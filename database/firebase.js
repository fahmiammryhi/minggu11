//database 
//import * as firebase from 'firebase';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOFoLYqk-vWjJ5TSCPo_1EHxUZxT505po",
  authDomain: "minggu10-70730.firebaseapp.com",
  projectId: "minggu10-70730",
  storageBucket: "minggu10-70730.appspot.com",
  messagingSenderId: "697463696176",
  appId: "1:697463696176:web:cba623348fc7795fdbf6f5",
  measurementId: "G-LVSLTNFZ63"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;
  