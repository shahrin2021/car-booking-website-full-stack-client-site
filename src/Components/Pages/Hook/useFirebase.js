import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import firebaseConfigInitialize from "../Firebase/Firebase.initialize";
firebaseConfigInitialize()
const useFirebase= ()=>{
    const [user , setUser] = useState({});
    const [isLoading, setIsLoading] =useState(true);
    


    const provider = new GoogleAuthProvider();
    const auth = getAuth()


    const signInWithGoogle = ()=>{
      return signInWithPopup(auth , provider)
        
        
    };
   


    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth , user=>{
                  if(user){
                      setUser(user)
                  }else{
                      setUser({})
                  }
                  setIsLoading(false);
              })
      
              return ()=>unsubscribed;
      
          
          },[]);

          const logOut = ()=>{
            signOut(auth)
            .then(()=>{}).finally(()=>setIsLoading(false))
        }




return {signInWithGoogle,logOut ,user ,isLoading ,setIsLoading }



}


export default useFirebase;
