import { createContext, useContext, ReactNode, useState, useEffect } from "react"
import { Response } from "../shared/types"
 
interface IUser {
    email: string
    username: string
    image: string
    role: string
}
 
interface IUserContext{
    user: IUser | null
    login: (email: string, password: string) => void
    register: (email: string, username: string, image: string, password: string) => void
    isAuthenticated: () => boolean
}
 
const initialValue: IUserContext = {
    user: null,
    login: (email: string, password: string) => {},
    register: (email: string, username: string, image: string, password: string) => {},
    isAuthenticated: () => false,
}
const userContext = createContext<IUserContext>(initialValue)
 
export function useUserContext(){
    return useContext(userContext)
}
 
 interface IUserContextProviderProps{
    children?: ReactNode
}
 
export function UserContextProvider(props: IUserContextProviderProps){
    const [user, setUser] = useState<IUser | null>(null)
 
    async function getData(token: string){
        try{
            const response = await fetch('http://localhost:8000/api/user/me', {
                headers: {'Authorization': `Bearer ${token}`}
            })
            const result: Response<IUser> = await response.json()
            if (result.status === 'error'){
                console.log(result.message) 
                return
            }
            setUser(result.data)
        } catch(error){
 
        }
    }
 
    async function login(email: string, password: string){
        try{
            const response = await fetch('http://localhost:8000/api/user/login', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ email: email.trim(), password: password.trim() })
            })
            console.log(response.body)
            const result: Response<string> = await response.json()
            if (result.status === 'error'){
                console.log(result.message)
                return
            }
            getData(result.data)
            localStorage.setItem('user', JSON.stringify(result.data))
        } catch(error){
            console.error(error)
        }
    }
     
    async function register(username: string, email: string, image: string, password: string){
        try {
            const response = await fetch('http://localhost:8000/api/user/register', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({'username': username, 'email': email, 'password': password, 'image': image, "role": "user"})
            })
 
            const result: Response<string> = await response.json()
            if (result.status === 'error'){
                console.log(result.message)
                return
            }
            getData(result.data)
 
        } catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        const userFromStorage = localStorage.getItem('user')
        if (!userFromStorage){
            return
        }

        getData(userFromStorage)
    }, [])
 
    return <userContext.Provider 
    value={{
        user: user,
        login: login,
        register: register,
        isAuthenticated: () => false
    }}>
 
    {props.children}
    </userContext.Provider> 
}