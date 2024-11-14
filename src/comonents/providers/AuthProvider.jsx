import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import auth from "../../firebase";



export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  

const [user,setUser]= useState(null)
const [loading , setLoading] = useState(true)

const creatUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const signInWithGoogle = ()=>{
    setLoading(true)
    signInWithPopup(auth,googleProvider)
}
const logOut =()=>{
    setLoading(true)
   return signOut(auth)
}
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
        console.log('objerb curent user ',currentUser);
    })
    return ()=>{
        unSubscribe()
    }
},[])



const authInfo= {user, signInWithGoogle, loading, creatUser,signInUser, logOut}
console.log(authInfo);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;
