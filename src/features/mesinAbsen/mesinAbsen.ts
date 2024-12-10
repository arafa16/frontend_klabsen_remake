import { useDispatch, useSelector } from "react-redux";
import { createMesinAbsens, deleteMesinAbsens, getMesinAbsensById, getMesinAbsensTable, resetMesinAbsen, updateMesinAbsens } from "../../stores/features/mesinAbsenSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataMesinAbsenTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getMesinAbsensTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetMesinAbsen());
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

export const createDataMesinAbsen = () => {
    const [name, setName] = useState('');
    const [ip_mesin, set_ip_mesin] = useState('');
    const [code, setCode] = useState('');
    const [day, setDay] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createMesinAbsens({
            name, ip_mesin, code, day, is_active
        }));
    }

    return {createDataSetting, name, setName, ip_mesin, set_ip_mesin, code, setCode, day, setDay, is_active, setIsActive, isLoading}
}

export const updateDataMesinAbsen = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [ip_mesin, set_ip_mesin] = useState('');
    const [code, setCode] = useState('');
    const [day, setDay] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getMesinAbsensById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                setCode(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                set_ip_mesin(data && data.datas && data.datas.data && data.datas.data.ip_mesin);
                setDay(data && data.datas && data.datas.data && data.datas.data.day);
                dispatch(resetMesinAbsen());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateMesinAbsens({
            uuid, name, ip_mesin, code, day, is_active
        }));
    }

    return {changeDataSetting, name, setName, ip_mesin, set_ip_mesin, code, setCode, day, setDay, is_active, setIsActive, isLoading}
}

export const deleteDataMesinAbsen = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteMesinAbsens({uuid}));
    }

    return {deleteData, isLoading}
}