import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config/Firbase.config";
import {  updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import axios from 'axios';

export const AuthContext = createContext(null)
const ContextProvider = ({children}) => {

//  const [viewLand , setViewLand] = useState({})
//  console.log(viewLand);
 const [user , setUser] =useState(null)
    const [loading, setLoading] = useState(true)
   
    const signUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider();
  const googleSignIn =()=>{
    setLoading(true)
    return  signInWithPopup(auth,googleProvider)
    
  }
  const githubProvider = new GithubAuthProvider()
  const githubSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  
  }
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const Logout =()=>{
        // setLoading(false)
         signOut(auth)
         toast.success(' successful Logout ')
         return
    }
   
    const UpdateUser = (displayName , photoURL, email) =>{
     return updateProfile(auth.currentUser, {
        displayName: displayName, photoURL: photoURL,email:email
      })
      };
    
      useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
         const userInfo = {email: currentUser?.email || user?.email}
         console.log("currentUser", currentUser);
         setUser(currentUser)
         setLoading(false)
         if(currentUser){
            axios.post('http://localhost:5000/jwt', userInfo , {withCredentials:true})
            .then(res=>{
                console.log(res.data)
            })
         }
         else{
            axios.post('http://localhost:5000/loggout', userInfo , {withCredentials:true})
            .then(res => {
                console.log(res.data);
            })
         }
        })
        return ()=>{
         unsubscribe()
        }
     },[user?.email])

const info = {UpdateUser,  user, googleSignIn,githubSignIn, signUp,login,Logout,loading}
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

ContextProvider.propTypes={
  children:PropTypes.node.isRequired
}

export default ContextProvider;