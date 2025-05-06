import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [err, setErr] = useState(' ')
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // console.log(user);
    // create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Update User
    const updateUser = (userData) => {
        return updateProfile(auth.currentUser, userData)
    }
    // login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log out
    const logOut = () => {
        return signOut(auth)
    }
    // observer
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            // console.log(currentUser);
        });
        return ()=> unsubscribe();
    },[])
    const authData = {
        user,
        setUser,
        createUser,
        login,
        logOut,
        loading,
        setLoading,
        err,
        setErr,
        updateUser
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;