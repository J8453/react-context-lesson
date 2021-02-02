import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const config = {
//   apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
//   authDomain: 'crwn-db.firebaseapp.com',
//   databaseURL: 'https://crwn-db.firebaseio.com',
//   projectId: 'crwn-db',
//   storageBucket: 'crwn-db.appspot.com',
//   messagingSenderId: '850995411664',
//   appId: '1:850995411664:web:7ddc01d597846f65'
// };

const config = {
  apiKey: "AIzaSyDLtCx5XVD0kxwkK4jS8SNHwUKSP4a6dcE",
  authDomain: "crd-shopping-web-app.firebaseapp.com",
  projectId: "crd-shopping-web-app",
  storageBucket: "crd-shopping-web-app.appspot.com",
  messagingSenderId: "822230693227",
  appId: "1:822230693227:web:513f667e6e53e759af482e",
  measurementId: "G-PSM631KWWN"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // userAuth is an user auth object
  if (!userAuth) return;
  // console.log(userAuth);

  // userRef will be a query reference object (DocumentReference object)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef);

  // userRef will be a snapshot object (DocumentSnapshot object)
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
