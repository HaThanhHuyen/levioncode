import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { doc } from "firebase/firestore";
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
const colRef1 = collection(db, "shopping-cart");
const auth = getAuth(app);

// Hàm để thêm item vào Firestore
const addItemToFirestore = async (item) => {
  try {
    const docRef = await addDoc(colRef1, { ...item });
    console.log("Đã thêm mục với ID: ", docRef.id);
  } catch (error) {
    console.error("Lỗi khi thêm mục: ", error);
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
      collection(db, "shopping-cart"),
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

// Export db, auth và các hàm để sử dụng ở các thành phần khác
export {
  auth,
  db,
  getItemCourseListFromFirestore,
  getItemShoppingCartFromFirestore,
  addItemToFirestore,
  removeItemFromFirestore,
};
export const database = getAuth(app)