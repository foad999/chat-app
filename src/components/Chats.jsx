import React,{useContext, useEffect, useState} from 'react';
import Navbar from './Navbar';
import {authenticator} from "./Authenticator"
import { validator } from '../Firebase';
import { useHistory } from 'react-router-dom';
import {ChatEngine, chatEngine} from "react-chat-engine"
import axios from "axios"
const Chats = () => {
    const[loading,setLoading]=useState(true )
    const user=useContext(authenticator)


    const history = useHistory()
    const Changer = async ()=>{
        await validator.signOut();
        history.push("/")
  }

  useEffect(()=>{
        if(!user){
            return history.push("/")
        }

        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                "project-id":"6efc1826-1535-4b73-838f-fff2fd30a4f5",
                "user-name":user.mail,
                "user-secret":user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formdata=new FormData();
            formdata.append("email",user.email);
            formdata.append("username",user.email);
            formdata.append("secret",user.uid);
            getFile(user.photoURL)
            .then (avatar =>{
                formdata.append("avatar",avatar,avatar.name)
                axios.post("https://api.chatengine.io/users/",formdata,{
                    headers:{
                        "private-key":"12ffc676-bdfb-4e90-8b8c-bd9cd7448304"
                    }
                })
                .then(()=>setLoading(false))
                .catch(error=>console.log(error))
            })
        })
  },[user,history])

    const getFile =async(url)=>{
        const res = await fetch(url);
        const data = await res.blob();
        return new File([data],"userPhoto.jpg",{type:"image/jpeg"})
    }

    
    return (
        <div>
            <Navbar signOut={Changer}/>

            <ChatEngine 
                height="calc(100vh-40px)"
                projectID="6efc1826-1535-4b73-838f-fff2fd30a4f5"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;