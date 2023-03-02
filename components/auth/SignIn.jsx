import axios from "axios"
import { useRouter } from "next/router"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import BASE_URL from "../../BASE_URL"
import { setCreds } from "../../redux/authuser"

const SignIn = ({ showSignUp })=>{
    const username = useRef()
    const password = useRef()
    const userDispatch = useDispatch()
    const router = useRouter()

    const signIn = async()=>{
        if(username.current.value == '' || password.current.value == ''){
            console.log("Please enter all the fields")
        }else{
            try{
                const resp = await axios.post(BASE_URL+'/signin', {username: username.current.value, password: password.current.value});
                userDispatch(setCreds(resp.data))
                router.push('/chats')
            }catch(e){
                console.log(e)
            }
        }
    }

    return (
        <div>
        <h1 className="text-6xl">Welcome Back</h1>
        <div className="mt-8">
            <div className="text-2xl my-2">
                Username
            </div>
            <input className="py-2 px-4 w-96 text-black" type="text" placeholder="Create an username" ref={username} />
            <div  className="text-2xl my-2">
                Password
            </div>
            <input className="py-2 px-4 w-96 text-black" type="password" placeholder="Create a password" ref={password} />
     

            <div className="mt-8">
            <button className="bg-secondary text-primary py-2 px-4 font-bolder mr-8" onClick={signIn}>
                Sign In
            </button>
            <button onClick={()=>{
                    showSignUp()
            }}>
                Don't have an account?
            </button>
            </div>

        </div>
    </div>
    )
}

export default SignIn;