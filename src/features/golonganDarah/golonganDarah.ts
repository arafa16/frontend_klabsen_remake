import { useDispatch, useSelector } from "react-redux";
import { 
    createGolonganDarahs, 
    deleteGolonganDarahs, 
    getGolonganDarahs, 
    getGolonganDarahsById, 
    getGolonganDarahsTable, 
    resetGolonganDarah, 
    updateGolonganDarahs 
} from "../../stores/features/golonganDarahSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataGolonganDarahSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.golonganDarah
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetGolonganDarah());
            }
        }
    })

    useEffect(()=>{
        dispatch(getGolonganDarahs());
    },[])

    return {dataResult}
}

export const getDataGolonganDarahTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.golonganDarah
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getGolonganDarahsTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetGolonganDarah());
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

export const createDataGolonganDarah = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.golonganDarah
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/golonganDarah');
                dispatch(resetGolonganDarah());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createGolonganDarahs({
            uuid, name, code, is_active
        }));
    }

    return {createDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const updateDataGolonganDarah = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.golonganDarah
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/golonganDarah');
                dispatch(resetGolonganDarah());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getGolonganDarahsById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                setCode(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetGolonganDarah());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/golonganDarah');
                dispatch(resetGolonganDarah());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateGolonganDarahs({
            uuid, name, code, is_active
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const deleteDataGolonganDarah = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.golonganDarah
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/golonganDarah');
                dispatch(resetGolonganDarah());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteGolonganDarahs({uuid}));
    }

    return {deleteData, isLoading}
}