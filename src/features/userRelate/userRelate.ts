import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getUserRelateTable,
    createUserRelate,
    resetUserRelate,
    deleteUserRelate
} from "../../stores/features/userRelateSlice";

export const getDataUserRelateTable = (datas:any) => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(7);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [status_code, set_status_code] = useState(1);
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const {data, isLoading, isSuccess} = useSelector(
        (state : any) => state.userRelate
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                console.log()
                setDataResult(data && data.datas && data.datas.data && data.datas.data.rows);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetUserRelate());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        const paramsObj : any = {page, limit, user_uuid:datas.uuid, search};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getUserRelateTable(searchParams));
    },[page, limit, datas.uuid, search])

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
        const paramsObj : any = {page, limit, user_uuid:datas.uuid, search};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getUserRelateTable(searchParams));
    }

    return {
        dataResult,
        page, setPage,
        limit,setLimit,
        search, setSearch,
        allPage, 
        status_code, set_status_code, 
        nextPage, 
        prevPage,
        reload
    }
}

export const createDataUserRelate = (datas:any) => {
    const [message, setMessage] = useState('')

    const {message:messageUser, isLoading, isSuccess, isError} = useSelector(
            (state : any) => state.userRelate
        );
        
    const dispatch = useDispatch();
        
    useEffect(()=>{
        if(isSuccess && messageUser){
            if(!isLoading){
                setMessage(messageUser);
                datas.reloadData();
                dispatch(resetUserRelate());
            }
        }
    },[messageUser, isSuccess, isLoading])

    const addSubmit = (datas:any) => {
        dispatch(createUserRelate({
            user_uuid:datas.user_uuid,
            user_relate_uuid:datas.user_relate_uuid,
            is_active:datas.is_active
        }));
    }

    return {message, addSubmit}

}

export const deleteDataUserRelate = (datas:any) => {
    const [message, setMessage] = useState('')

    const {message:messageUser, isLoading, isSuccess, isError} = useSelector(
            (state : any) => state.userRelate
        );
        
    const dispatch = useDispatch();
        
    useEffect(()=>{
        if(isSuccess && messageUser){
            if(!isLoading){
                setMessage(messageUser);
                datas.reloadData();
                dispatch(resetUserRelate());
            }
        }
    },[messageUser, isSuccess, isLoading])

    const deleteAction = (uuid:any) => {
        dispatch(deleteUserRelate({uuid}));
    }

    return {message, deleteAction}

}