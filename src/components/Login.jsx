import React from 'react';
import style from "../assets/css/Login.module.css"
import google from "../assets/images/OIP.jpg"
import firebase from "firebase/app"
import { validator } from '../Firebase';
const Login = () => {
    return (
        <div className={style.containerPage}>
            <div className={style.container}>
                <h1>Wellcome to <span className={style.chatish}>Foochat</span></h1>

                <div className={style.imgContainer}
                    onClick={()=>validator.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={google} alt="google" className={style.google} /> sign in with google  
                </div>
            </div>
        </div>
    );
};

export default Login;