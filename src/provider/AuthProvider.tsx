"use client";
import { auth } from "@/services/firebase";
import { createContext, useContext, useEffect, useState } from "react";


const Context = createContext({});

type UserT = {
    user: any,
    isLogin: boolean
}

const AuthProvider = ({children}:any) =>{
    const [loading, setLoading] = useState<boolean>(true)
    const initialState = {
        user:null,
        isLogin:false
    }
    const [user, setUser] = useState<UserT>(initialState);

    useEffect(()=>{
        const subscribe = auth.onAuthStateChanged((userState)=>{
            setUser({isLogin: userState ? true : false, user: userState});
            setLoading(false);
        });
        return subscribe;
    },[])

    // console.log("User State ",user.user)

    return (
        <Context.Provider value={{user,setUser}}>
            {loading && (<div className="h-screen flex w-full justify-center items-center">Loading...</div>)}
            {!loading && children}
        </Context.Provider>
    )
}

export const AuthContext = () => useContext(Context);

export default AuthProvider;