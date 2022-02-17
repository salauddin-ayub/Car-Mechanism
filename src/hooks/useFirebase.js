import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firbase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
        .then(result => {
            setUser(result.user);
        });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
          .then(() =>{});
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase;