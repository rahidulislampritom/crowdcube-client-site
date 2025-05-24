import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../FIrebase/firebase.init";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // console.log(user);

    // Get the currently signed-in user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })

        // cleanup function।
        return () => unsubscribe();
    }, [])

    // Sign up new users
    const userSignUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in existing users 
    const userSignin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    // signout users
    const userSignOut = () => {
        return signOut(auth);
    }

    // Update a user's profile 
    const userProfileUpdate = (profileUpdate) => {
        return updateProfile(auth.currentUser, profileUpdate)
    }

    // Google signInWithPopup
    const googleProvider = new GoogleAuthProvider();

    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // all firebase auth sending from here to other components
    const allValue = {
        user,
        setUser,
        loader,
        setLoader,
        userSignUp,
        userSignin,
        userSignOut,
        userProfileUpdate,
        googleSignin

    }


    return (
        <div>
            <AuthContext.Provider value={allValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;