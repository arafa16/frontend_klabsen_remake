import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout, resetAuth } from "../../stores/features/authSlice";

export const getLogoutAuth = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data:dataLogin, isError:isErrorLogin, isSuccess:isSuccessLogin, isLoading:isLoadingLogin, message:messageLogin} = useSelector(
        (state : any) => state.auth
      )
    
    useEffect(()=>{
    if(messageLogin && isSuccessLogin){
        if(!isLoadingLogin){
            setLoading(false);
            dispatch(resetAuth());
            navigate('/login')
        }
    }
    },[messageLogin, isSuccessLogin, isLoadingLogin])

    useEffect(()=>{
    if(isErrorLogin && messageLogin){
        if(!isLoadingLogin){
        setLoading(false);
        }
    }
    },[isErrorLogin, messageLogin, isLoadingLogin])

    const handleLogout = () => {
        dispatch(Logout());
        setLoading(true);
    }

    return {data, loading, message, handleLogout}
}