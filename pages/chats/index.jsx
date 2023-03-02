import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/counter";

const Chats = ()=>{
    const state = useSelector((state)=> state.authuser)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("Log this")
        dispatch(increment())
    }, [])

    return (
        <div className="h-screen flex">
            <div className="">
                   Welcome dear {state.user.username}            
            </div>

            <div className=" grow">
         
            </div>
        </div>
    );
}

export default Chats;