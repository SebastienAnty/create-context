import { useContext } from 'react'
import { AuthContext } from '../App'


export default function Login() {
    const { setUser, setIsLoggedIn} = useContext(AuthContext)
    const handleLogin = () => {
        setUser({
            name: 'Sebas',
            age: 21,
        })
        setIsLoggedIn(true)
    }
    return <button onClick={() => handleLogin()}>Login</button>
}