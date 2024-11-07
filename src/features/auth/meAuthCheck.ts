import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe, resetMe } from "../../stores/features/meSlice";

export const getMeAuthCheck = () => {
    const [data, setData] = useState([]);
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
          navigate('/');
        }
      }
    },[dataMe, isSuccessMe, isLoadingMe]);

    

    useEffect(()=>{
        dispatch(getMe());
    },[])

    return {data, loading, message}
}