import { createContext } from "react";
export const UserContext = createContext();

export default function UserContextProvider(props){
    return (
        <UserContext.Provider value={{username:'username'}} >
            {props.children}
        </UserContext.Provider>
    )
}