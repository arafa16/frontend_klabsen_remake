import { useDispatch, useSelector } from "react-redux";
import { createStatusKoreksi, deleteStatusKoreksi, getStatusKoreksi, getStatusKoreksiById, getStatusKoreksiTable, resetStatusKoreksi, updateStatusKoreksi } from "../../stores/features/statusKoreksiSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataStatusKoreksiSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusKoreksi
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetStatusKoreksi());
            }
        }
    })

    useEffect(()=>{
        dispatch(getStatusKoreksi());
    },[])

    return {dataResult}
}

export const getDataStatusKoreksiTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusKoreksi
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getStatusKoreksiTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetStatusKoreksi());
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

export const createDataStatusKoreksi = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusKoreksi
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusKoreksi');
                dispatch(resetStatusKoreksi());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createStatusKoreksi({
            name, code, is_active
        }));
    }

    return {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const updateDataStatusKoreksi = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusKoreksi
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusKoreksi');
                dispatch(resetStatusKoreksi());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getStatusKoreksiById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                setCode(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetStatusKoreksi());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusKoreksi');
                dispatch(resetStatusKoreksi());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateStatusKoreksi({
            uuid, name, code, is_active
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const deleteDataStatusKoreksi = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.statusKoreksi
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/statusKoreksi');
                dispatch(resetStatusKoreksi());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteStatusKoreksi({uuid}));
    }

    return {deleteData, isLoading}
}