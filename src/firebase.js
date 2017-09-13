import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBmHeWtug4DR6--qO2IylVYsyI2KfY_v8I",
  authDomain: "share-ideas-dd32f.firebaseapp.com",
  databaseURL: "https://share-ideas-dd32f.firebaseio.com",
  projectId: "share-ideas-dd32f",
  storageBucket: "share-ideas-dd32f.appspot.com",
  messagingSenderId: "17950275472"
};

export const firebaseApp = firebase.initializeApp(config);