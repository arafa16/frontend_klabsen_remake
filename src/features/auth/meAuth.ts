import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe, resetMe } from "../../stores/features/meSlice";

export const getMeAuth = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data:dataMe, isError:isErrorMe, isSuccess:isSuccessMe, isLoading:isLoadingMe, message:messageMe} = useSelector(
        (state : any) => state.me
    )

    useEffect(()=>{
        if(dataMe && isSuccessMe){
            if(!isLoadingMe){
                setLoading(false);
                setData(dataMe)
            }
        }
    },[dataMe, isSuccessMe, isLoadingMe])

    useEffect(()=>{
        if(isErrorMe && messageMe){
            if(!isLoadingMe){
                dispatch(resetMe());
                navigate('/login')
            }
        }
    },[isErrorMe, messageMe, isLoadingMe])

    useEffect(()=>{
        dispatch(getMe());
    },[])

    return {data, loading, message}
}