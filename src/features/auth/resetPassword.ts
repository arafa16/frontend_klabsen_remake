import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { 
//     LoginUser, 
//     RegisterUser, 
//     resetAuth, 
//     // SendEmailForgot, 
//     // VerifyToken
// } from "../../stores/features/authSlice";
// import { ResetPasswordByToken, resetAuth2} from "../../stores/features/auth2Slice";
import { 
    SendEmailForgot, 
    resetState,
    VerifyToken
} from "../../stores/features/resetPasswordSlice";


export const getForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<any>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data:dataReset, isError:isErrorReset, isSuccess:isSuccessReset, isLoading:isLoadingReset, message:messageReset} = useSelector(
        (state : any) => state.resetPassword
    )

    useEffect(()=>{
        if(isSuccessReset && messageReset){
            if(!isLoadingReset){
                setMessage(messageReset)
                dispatch(resetState());
                setEmail('');
            }
        }
    },[isSuccessReset, messageReset, isLoadingReset])

    useEffect(()=>{
        if(isErrorReset && messageReset){
            if(!isLoadingReset){
                setMessage(messageReset.data)
                dispatch(resetState());
                setEmail('');
            }
        }
    },[isErrorReset, messageReset, isLoadingReset])

    const submitForgotPassword= (e : any) => {
        e.preventDefault();
        dispatch(SendEmailForgot({
          email
        }));
    }

    return {email, setEmail, isLoadingReset, message, submitForgotPassword}
}

export const getVerifyToken = (datas:any) => {
    const [token, setToken] = useState<any>(datas && datas.token);
    const [dataResult, setDataResult] = useState<any>(null);
    const [message, setMessage] = useState<any>(null)
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const {data, isError, isSuccess, isLoading, message:messageVerify} = useSelector(
        (state : any) => state.resetPassword
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetState())
            }
        }
    },[isSuccess, data, isLoading]);

    useEffect(()=>{
        if(isError && messageVerify){
            if(!isLoading){
                setMessage({msg: 'token expired or somethin wrong, please send email reset again'});
                setError(true);
                dispatch(resetState())
            }
        }
    },[isError, messageVerify, isLoading]);

    
    useEffect(()=>{
        dispatch(VerifyToken({token}));
    },[token]);

    return {dataResult, message, error, isLoading}

}

export const getSubmitResetPassword = (datas:any) => {
    const [token, setToken] = useState(datas && datas.token);
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [message, setMessage] = useState<any>(null)
    const [successReset, setSuccessReset] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data, isError, isSuccess, isLoading, message:messageVerify} = useSelector(
        (state : any) => state.auth2
    )

    useEffect(()=>{
        if(isSuccess && messageVerify){
            if(!isLoading){
                setMessage({msg:messageVerify});
                setSuccessReset(true);
                dispatch(resetAuth2())
                setInterval(() => navigate('/login'), 5000);
            }
        }
      },[isSuccess, messageVerify, isLoading]);

    useEffect(()=>{
        if(isError && messageVerify){
            if(!isLoading){
                setMessage({msg:messageVerify});
                dispatch(resetAuth2())
            }
        }
    },[isError, messageVerify, isLoading]);

    const submitResetPassword = (e : any) => {
        e.preventDefault();
        dispatch(ResetPasswordByToken({
            token, password, confPassword
        }));
    }

    return {submitResetPassword, password, setPassword, confPassword, setConfPassword, message, successReset, isLoading}
}

