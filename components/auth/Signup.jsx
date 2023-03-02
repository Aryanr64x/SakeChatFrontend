import { useRef } from "react"
import BASE_URL from "../../BASE_URL.js"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setCreds } from "../../redux/authuser.js"
import { useRouter } from "next/router.js"

const SignUp = ({ showSignIn }) => {

    const router = useRouter()
    const username = useRef()
    const password = useRef()
    const password_repeat = useRef()
    const userDispatch = useDispatch()

    const signUp = async ()=>{
        if(username.current.value == '' || password.current.value == '' || password_repeat.current.value == ''){
            console.log("Please enter all the fields")
        }else{
            try{
                const resp = await axios.post(BASE_URL+'/signup', {username: username.current.value, password: password.current.value, password_repeat: password_repeat.current.value});
                userDispatch(setCreds(resp.data))
                router.push('/chats')
            }catch(e){
                console.log(e)
            }
        }

    }
  
    return (
        
            <div>
                <h1 className="text-6xl">Create an account</h1>
                <div className="mt-8">
                    <div className="text-2xl my-2">
                        Username
                    </div>
                    <input className="py-2 px-4 w-96 text-black" type="text" placeholder="Create an username" ref={username} />
                    <div  className="text-2xl my-2">
                        Password
                    </div>
                    <input className="py-2 px-4 w-96 text-black" type="password" placeholder="Create a password" ref={password} />
                    <div  className="text-2xl my-2">
                        Password Repeat
                    </div>
                    <input className="py-2 px-4 w-96 text-black" type="password" placeholder="Re enter your password" ref={password_repeat} />

                    <div className="mt-8">
                    <button className="bg-secondary text-primary py-2 px-4 font-bolder mr-8" onClick={signUp}>
                        Sign Up
                    </button>
                    <button onClick={()=>{
                            showSignIn()
                    }}>
                        Already have an account ?
                    </button>
                    </div>

                </div>
            </div>
        
    );


}
export default SignUp;