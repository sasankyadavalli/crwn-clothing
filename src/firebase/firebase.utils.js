import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAIUGuIjwJ6lwKF0ZH9qn0EkyS0ru0X6zI",
  authDomain: "crwn-db-4412c.firebaseapp.com",
  projectId: "crwn-db-4412c",
  storageBucket: "crwn-db-4412c.appspot.com",
  messagingSenderId: "872067035282",
  appId: "1:872067035282:web:94b701ec909f6034adf64b",
  measurementId: "G-8VB67F3GBM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;