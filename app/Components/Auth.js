"use client"

import { signInWithGoogle, signOutGoogle } from "../../lib/firebase";

const Auth = () => {
    const user = JSON.parse(localStorage.getItem('aa-auth'))
    
    if(user){
        return <nav className="flex gap-5 items-center">
            <button className="uppercase px-5 py-3 bg-red-400 hover:bg-red-500 rounded-lg" onClick={signOutGoogle}>Sign Out</button>

        </nav>
    }

    if(user === null){
        return <button className="uppercase px-5 py-3 bg-green-300 hover:bg-green-500 rounded-lg" onClick={signInWithGoogle}>Sign In</button>
    }
    
}

export default Auth;