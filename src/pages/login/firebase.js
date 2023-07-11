import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  where,
  query,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
const db = getFirestore(app);
const colRef = collection(db, "courseList");
const colRef1 = collection(db, "shoppingCart");

const auth = getAuth(app);


const addItemToFirestore = async (item) => {
  try {
    const docRef = await addDoc(colRef1, { ...item });
    console.log("Added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error: ", error);
  }
};



// Xóa item từ Firestore
const removeItemFromFirestore = async (id) => {
  try {
    await deleteDoc(doc(colRef1, id));
    console.log("Item removed from Firestore.");
  } catch (error) {
    console.error("Error removing item: ", error);
  }
};

// Lấy danh sách khóa học từ Firestore
const getItemCourseListFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(colRef);
    const courseList = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(courseList);
    return courseList;
  } catch (error) {
    console.error("Error getting course list: ", error);
    return [];
  }
};

// Lấy danh sách mục từ giỏ hàng từ Firestore
const getItemShoppingCartFromFirestore = async (email) => {
  try {
    const shoppingCartQuery = query(
      collection(db, "shoppingCart"),
      where("userEmail", "==", email)
    );
    const querySnapshot = await getDocs(shoppingCartQuery);
    const shoppingCart = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log(shoppingCart);
    return shoppingCart;
  } catch (error) {
    console.error("Lỗi: ", error);
    return [];
  }
};


export const addToLearningJourney = async (userEmail, course) => {
  const docRef = doc(db, "myLearningJourney", userEmail);
  await setDoc(docRef, { items: course }, { merge: true });
};

// Lấy danh sách các mục từ learning journey
const getItemsFromLearningJourney = async (userEmail) => {
  try {
    const docRef = doc(db, "myLearningJourney", userEmail);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const learningJourneyItems = docSnapshot.data().items;
      console.log(learningJourneyItems);
      return learningJourneyItems;
    } else {
      console.log("Learning journey not found for user:", userEmail);
      return [];
    }
  } catch (error) {
    console.error("Error getting learning journey items:", error);
    return [];
  }
};
//Lấy thông tin người dùng 
const getCurrentUserAndSaveToFireStore = async()=>{
  onAuthStateChanged(auth,async(user)=>{
    if(user){
      const {displayName, email,phoneNumber,dateOfBirth} =user;
      const userObject = {
        name:displayName || "",
        email:email || "",
        phoneNumber:phoneNumber || "",
        dateOfBirth:dateOfBirth || "",
      }
      try{
        const docRef = await addDoc(collection(db,"users"), userObject);
        console.log("Users saved with ID", docRef.id)
      }
      catch(error){
        console.log("No user is currently logged in",error)
      }
    }
  })
}
getCurrentUserAndSaveToFireStore();

export {
  auth,
  db,
  getItemCourseListFromFirestore,
  getItemShoppingCartFromFirestore,
  addItemToFirestore,
  removeItemFromFirestore,
  getItemsFromLearningJourney
};
export const database = getAuth(app);
