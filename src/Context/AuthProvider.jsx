import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email, password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 

    const signOutUser = () =>{
        return signOut(auth) 
    }

    const passwordReset = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

      const updateUserProfile = (name, photoURL) =>{
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        loading,
        createUser,
        signInUser,
        signInGoogle,
        signOutUser,
        passwordReset,
        updateUserProfile,
        user,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;