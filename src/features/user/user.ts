import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getUsersTable, 
    deleteUser, 
    getUsers, 
    resetUser2 
} from "../../stores/features/user2Slice";
import { 
    getUserById, 
    getCountUser,
    UpdateUser, 
    resetUsers, 
    CreateUser 
} from "../../stores/features/userSlice";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../stores/features/meSlice";

export const getDataUserTable = () => {
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [status_code, set_status_code] = useState(1);
    const [search, setSearch] = useState('');
    const [penempatanUuid, setPenempatanUuid] = useState<any>(null);

    const dispatch = useDispatch();

    const {data, isLoading, isSuccess} = useSelector(
        (state : any) => state.user2
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                console.log()
                setDatas(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetUser2());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        const paramsObj : any = {page, limit, status_code, search, penempatan_uuid:penempatanUuid};
        const searchParams = new URLSearchParams(paramsObj);
        console.log(searchParams, 'params')
        dispatch(getUsersTable(searchParams));
    },[page, limit, status_code, search, penempatanUuid])

    //table
    const countData = (allData : any) =>{
        const count = allData / limit;
        setAllPage(Math.ceil(count))
    }

    const nextPage = () => {
        if(page < allPage){
            const count = page + 1;
            setPage(count);
        }
    }

    const prevPage = () => {
        if(page > 1){
            const count = page - 1;
            setPage(count);
        }
    }

    const reload = () => {
        const paramsObj : any = {page, limit, status_code, search, penempatan_uuid:penempatanUuid};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getUsersTable(searchParams));
    }

    return {
        datas,
        page, setPage,
        limit,setLimit,
        search, setSearch,
        penempatanUuid, setPenempatanUuid,
        allPage, 
        status_code, set_status_code, 
        nextPage, 
        prevPage,
        reload
    }
}

export const getCountDataUser = () => {
    const [datas, setDatas] = useState([]);
    const dispatch = useDispatch();

    const {data, isLoading, isSuccess} = useSelector(
        (state : any) => state.user
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDatas(data && data.datas && data.datas.data);
                dispatch(resetUser2());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        dispatch(getCountUser());
    },[])

    const reload = () => {
        dispatch(getCountUser());
    }

    return {datas, reload}
}

export const getDataUsers = () => {
    const [datas, setDatas] = useState([]);
    const [search, setSearch] = useState<any>('');

    const dispatch = useDispatch();

    const {data, isLoading, isSuccess} = useSelector(
        (state : any) => state.user2
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDatas(data && data.datas && data.datas.data);
                dispatch(resetUser2());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(search !== null && search !== ''){
            const paramsObj : any = {search};
            const searchParams = new URLSearchParams(paramsObj);
            dispatch(getUsers(searchParams));
        }else{
            setDatas([]);
        }
    },[search])

    return {datas, search, setSearch}
}

export const getDataUserById = (datas:any) => {
    const [dataResult, setDataResult] = useState([]);
    const dispatch = useDispatch();

    const {data, isLoading, isSuccess} = useSelector(
        (state : any) => state.user
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetUsers());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        dispatch(getUserById({id:datas.id}));
    },[])

    const reload = () => {
        dispatch(getUserById({id:datas.id}));
    }

    return {dataResult, reload}
}

export const deleteDataById = (datas:any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {message, isLoading, isSuccess} = useSelector(
        (state : any) => state.user2
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                dispatch(resetUser2());
                navigate('/employee/data');
            }
        }
    },[message, isSuccess, isLoading])

    const deleteData = () => {
        dispatch(deleteUser({id:datas.id}));
    }

    return {deleteData}
}

export const updateDataUserById = (datas:any) => {
    const [message, setMessage] = useState<any>(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {message:messageUser, isLoading, isSuccess} = useSelector(
        (state : any) => state.user
    );
    
    useEffect(()=>{
        if(isSuccess && messageUser){
            if(!isLoading){
                setMessage(messageUser && messageUser.datas  && messageUser.datas.data);
                dispatch(resetUsers());
                dispatch(getMe());
                navigate(-1)
            }
        }
    },[messageUser, isSuccess, isLoading])

    const submit = (e : any) => {
        e.preventDefault();
        dispatch(UpdateUser(datas));
    }

    return {submit, isLoading, message, isSuccess}
}

export const createDataUser = (datas:any) => {
    const [message, setMessage] = useState<any>(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {message:messageUser, isLoading, isSuccess, isError} = useSelector(
        (state : any) => state.user
    );
    
    useEffect(()=>{
        if(isSuccess && messageUser){
            if(!isLoading){
                setMessage(messageUser);
                dispatch(resetUsers());
                navigate(-1);
            }
        }
    },[messageUser, isSuccess, isLoading])

    useEffect(()=>{
        if(isError && messageUser){
            if(!isLoading){
                setMessage(messageUser);
                dispatch(resetUsers());
            }
        }
    },[messageUser, isError, isLoading])

    const submit = (e : any) => {
        e.preventDefault();
        dispatch(CreateUser(datas));
    }

    return {submit, message, isLoading}
}