import { createContext } from 'react';
import { useState } from 'react';



export const UserContext = createContext({} as UserContextType)


export const UserProvider = ({ children }: any) => {

    const [usersList, setUsersList] = useState<string[]>([]);

    return (
        <UserContext.Provider value={{ usersList, setUsersList }}>
            {children}
        </UserContext.Provider>
    );
};


export interface UserContextType {
    usersList: string[],
    setUsersList: (usersList:string[])=>void;
}
