import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAKVp4YJRiF_7sL8bDtSCuxULiVwdAVz5g",
  authDomain: "obrador-celiaco.firebaseapp.com",
  projectId: "obrador-celiaco",
  storageBucket: "obrador-celiaco.appspot.com",
  messagingSenderId: "697811198290",
  appId: "1:697811198290:web:b2e93095ffb88d7fe29a8b"
};

// Initialize Firebase
firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export const fetchProducts = () => {
    return db
      .collection('products')
      .orderBy('name', 'desc')
      .get()
      .then(({ docs }) => {
        return docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return {
            ...data,
            id
          };
        });
      });
  };