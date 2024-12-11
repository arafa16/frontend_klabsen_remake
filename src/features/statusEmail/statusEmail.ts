import { useDispatch, useSelector } from "react-redux";
import { 
    createStatusEmail,
    deleteStatusEmail,
    getStatusEmail,
    getStatusEmailById,
    getStatusEmailTable,
    resetStatusEmail, 
    updateStatusEmail
} from "../../stores/features/statusEmailSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataStatusEmail = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusEmail
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetStatusEmail());
            }
        }
    })

    useEffect(()=>{
        dispatch(getStatusEmail());
    },[])

    return {dataResult}
}

export const getDataStatusEmailTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusEmail
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getStatusEmailTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetStatusEmail());
            }
        }
    },[data, isSuccess, isLoading]);

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

    return {dataResult, nextPage, prevPage, page, allPage}
}

export const createDataStatusEmail = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusEmail
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusEmail');
                dispatch(resetStatusEmail());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createStatusEmail({
            name, code, is_active
        }));
    }

    return {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const updateDataStatusEmail = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusEmail
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusEmail');
                dispatch(resetStatusEmail());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getStatusEmailById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                setCode(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetStatusEmail());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusEmail');
                dispatch(resetStatusEmail());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateStatusEmail({
            uuid, name, code, is_active
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const deleteDataStatusEmail = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusEmail
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusEmail');
                dispatch(resetStatusEmail());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteStatusEmail({uuid}));
    }

    return {deleteData, isLoading}
}

