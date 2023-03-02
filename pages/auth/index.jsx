import { useState } from "react";
import SignIn from "../../components/auth/SignIn";
import SignUp from "../../components/auth/Signup";

const auth = ()=>{
    const [signIn, setSignIn] = useState(false)
    

    return (
        <div className="h-screen flex  flex-col justify-center items-center">
           
           {
            
            (signIn) ? (
                (<SignIn 
                    showSignUp={()=>{
                        setSignIn(false)
                    }}
                />)
            ) : (<SignUp showSignIn={()=>{
                setSignIn(true)
            }}/>)
            }
        </div>

    );
}

export default auth;