import firebase from "firebase";
const firebaseConfig = {
// your firebase congfig
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
