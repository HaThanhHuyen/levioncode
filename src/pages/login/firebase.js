import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdy5Ww-xraZQjjPMgbSbOE_yZ8WNfFqbg",
  authDomain: "levionweb-f3729.firebaseapp.com",
  projectId: "levionweb-f3729",
  storageBucket: "levionweb-f3729.appspot.com",
  messagingSenderId: "515728230698",
  appId: "1:515728230698:web:950670523dd57293817653",
  measurementId: "G-C1L9S7S0GP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
const colRef = collection(db, "courseList");

getDocs(colRef)
  .then((snapshot) => {
    const shoppingCart = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(shoppingCart);
  })
  .catch((err) => {
    console.log(err.message);
  });

export { auth, db };
