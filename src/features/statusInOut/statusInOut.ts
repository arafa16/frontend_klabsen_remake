import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createStatusInout, deleteStatusInout, getStatusInout, getStatusInoutById, getStatusInoutTable, resetStatusInout, updateStatusInout } from "../../stores/features/statusInoutSlice";
import { useNavigate } from "react-router-dom";

export const getStatusInOut = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusInout
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetStatusInout());
            }
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getStatusInout());
    },[])

    return {dataResult}
}

export const getDataStatusInOutTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusInout
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getStatusInoutTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetStatusInout());
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

export const createDataStatusInOut = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusInout
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusInout');
                dispatch(resetStatusInout());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createStatusInout({
            name, code, is_active
        }));
    }

    return {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const updateDataStatusInOut = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusInout
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusInout');
                dispatch(resetStatusInout());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getStatusInoutById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                setCode(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetStatusInout());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusInout');
                dispatch(resetStatusInout());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateStatusInout({
            uuid, name, code, is_active
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const deleteDataStatusInOut = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusInout
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusInOut');
                dispatch(resetStatusInout());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteStatusInout({uuid}));
    }

    return {deleteData, isLoading}
}