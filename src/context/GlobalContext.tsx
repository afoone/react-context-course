import {useState, useEffect, createContext, FC} from 'react'

// como hay elementos opcionales definimos la interfaz
interface IGlobalContext {
    username: string;
    setUsername: (username: string) => void;
    roles?: string[];
    setRoles?: (roles: string[]) => void;
    addRole?: (role: string) => void;
}

// estado por defecto
export const defaultState: IGlobalContext = {
    username: '',
    setUsername: (username: string) => {},
};



// creamos el contexto con el generic de create context
const GlobalContext = createContext<IGlobalContext>(defaultState)


export const  GlobalProvider : FC = ({children}) => {

    // creamos el estado
    const [username, setUsername] = useState('');
    const [roles, setRoles] = useState([]);

    return (
    <GlobalContext.Provider value={{
        username,
        setUsername,
        roles,
    }}>
        {children}
    </GlobalContext.Provider>
    )   
}


export default GlobalContext

