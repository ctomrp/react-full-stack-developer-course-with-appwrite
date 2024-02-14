import React, { useState } from "react";
// importo el context que creé
import UserContext from "./UserContext";

// el prop que se recibe es children
const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;