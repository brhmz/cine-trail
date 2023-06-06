import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('userInfo')
        if(!user){
            localStorage.setItem('userInfo','') //to prevent 'null' response
        } else {
            setUser(JSON.parse(localStorage.getItem('userInfo')))
        }
        setToken(localStorage.getItem('token')) 
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }} >
            {props.children}
        </UserContext.Provider>
    )
}