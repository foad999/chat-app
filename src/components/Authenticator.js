import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import {validator} from "../Firebase"
export const authenticator = React.createContext();

const Authenticator = (props) => {
    const [User,setUser]=useState(false)
    const[Loading,setLoading]=useState(true)
    const History = useHistory()

    useEffect(()=>{
        validator.onAuthStateChanged((user)=>{
            setUser(user)
            setLoading(false)
            if (user) History.push("/chats")
        })
    },[User,History])

    return (
        <authenticator.Provider value={User}>
            {!Loading && props.children}
        </authenticator.Provider>
    );
};

export default Authenticator;