import { async } from "@firebase/util"
import {getAuth,signOut , signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useState,useEffect } from 'react'
import '../Login/Login.css'

function Login() {
    const [user , setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) =>{
            setUser(user)
        })
    }, [])

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    function inicioSession() {

        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user.displayName)
        
       
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        
          });
    }

    function cerrarSession() {
        signOut(auth).then(() => {
            console.log("Salio Correctamente")
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }



    return(
        <div>
        {user === null ?
        <div className="contenedor-ingresar">
            <button onClick={inicioSession} className="boton-ingresar">Ingresar</button>
          
        </div>
        :
        <div className="contenedor-salir">
            <img src={user.photoURL}  className="foto-login"/>
            <div>{user.displayName}</div>
            <div>{user.email}</div>
            <button onClick={cerrarSession} className="boton-salir">Salir</button>
        </div>}
            </div>
    )
}

export default Login