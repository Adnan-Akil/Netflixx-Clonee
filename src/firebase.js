import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8w8mjQBhXOtI7X3KILnnEi0bdn6gWTng",
  authDomain: "netflix-clone-3b527.firebaseapp.com",
  projectId: "netflix-clone-3b527",
  storageBucket: "netflix-clone-3b527.firebasestorage.app",
  messagingSenderId: "134392811784",
  appId: "1:134392811784:web:b0542f8bf2f54702e3dcbd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    })
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const login = async (email,password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, logout, signup};