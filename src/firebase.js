import { initializeApp } from "firebase/app";
import {AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBB-1weU2gWaeI3zkU_9WE2rukbtLSWm0A",
  authDomain: "netflix-clone-7b8db.firebaseapp.com",
  projectId: "netflix-clone-7b8db",
  storageBucket: "netflix-clone-7b8db.firebasestorage.app",
  messagingSenderId: "669151146433",
  appId: "1:669151146433:web:f4936a40bff9bdace57f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email , password) => {
    try {
        const res  = await createUserWithEmailAndPassword(auth , email , password);
        console.log(res)
        const user  = res.user;
        await addDoc(collection(db , 'user') , {
            uid:user.id , 
            authProvider: 'local',
            email,
        })
        
    } catch (error) {
        console.log('sign in error =>' , error)
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login =  async (email , password) => {
    try {
        await signInWithEmailAndPassword(auth , email , password);
    } catch (error) {
        console.log("login error =>" , error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth , db , login , logout , signup};