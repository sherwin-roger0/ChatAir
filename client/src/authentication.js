import React from 'react'
import { useContext,useState,useEffect} from "react";
import {auth} from "./firebase"
import "firebase/auth"
const Authcontext = React.createContext();

export function Authenticate(){
    return useContext(Authcontext);
}

export default function Authentication({children}) {
    const [currentUser,setCurrentUser] =useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
        })
    
        return unsubscribe
      }, [])

    function signin(email,password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
        
    }

    const Value ={
        currentUser,
        signin,
        login
    }

    return (
        <div>
            <Authcontext.Provider value={Value}>
                {children}
            </Authcontext.Provider>
        </div>
    )
}
