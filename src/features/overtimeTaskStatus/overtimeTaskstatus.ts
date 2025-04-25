import { useDispatch, useSelector } from "react-redux";
import { 
    createOvertimeTaskStatus, 
    deleteOvertimeTaskStatus, 
    getOvertimeTaskStatus, 
    getOvertimeTaskStatusById, 
    getOvertimeTaskStatusTable, 
    resetOvertimeTaskStatus, 
    updateOvertimeTaskStatus 
} from "../../stores/features/overtimeTaskStatusSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDatas = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTaskStatus
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetOvertimeTaskStatus());
            }
        }
    })

    useEffect(()=>{
        dispatch(getOvertimeTaskStatus());
    },[])

    return {dataResult}
}

export const getDataTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTaskStatus
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getOvertimeTaskStatusTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetOvertimeTaskStatus());
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

export const createData = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.overtimeTaskStatus
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/overtimeTaskStatus');
                dispatch(resetOvertimeTaskStatus());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createOvertimeTaskStatus({
            name, code, is_active
        }));
    }

    return {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const updateData = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.overtimeTaskStatus
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/overtimeTaskStatus');
                dispatch(resetOvertimeTaskStatus());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getOvertimeTaskStatusById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                setCode(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetOvertimeTaskStatus());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/overtimeTaskStatus');
                dispatch(resetOvertimeTaskStatus());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateOvertimeTaskStatus({
            uuid, name, code, is_active
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const deleteData = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.overtimeTaskStatus
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/overtimeTaskStatus');
                dispatch(resetOvertimeTaskStatus());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteOvertimeTaskStatus({uuid}));
    }

    return {deleteData, isLoading}
}