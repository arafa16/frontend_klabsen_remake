import { 
    getKoreksisByUser, 
    getKoreksisById,
    getKoreksisByApprover, 
    approverKoreksis,
    resetKoreksis 
} from "../../stores/features/koreksiSlice"
import { 
    getKoreksisTableByUser,
    getKoreksisTableByApprover
} from "../../stores/features/koreksi2Slice"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';

//get data to data koreksi page
export const getDataKoreksiTableByApprover = (props:any) => {
    const{dataMe} = props;

    const [datas, setDatas] = useState<any>([]);
    const [id, setId] = useState<any>(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [statusCode, setStatusCode] = useState<any>(1);

    const dispatch = useDispatch();

    useEffect(()=>{
        setId(dataMe.uuid)
    },[dataMe])

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.koreksi2
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDatas(data);
                countData(data.count);
                dispatch(resetKoreksis())
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(id !== null){
            if(id !== undefined){
                dispatch(getKoreksisTableByApprover({limit, page, id, statusCode}));
            }
        }
    },[limit, page, id, statusCode]);

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

    return {datas, page, limit, allPage, statusCode, setStatusCode, nextPage, prevPage}
}

//get data to data koreksi page
export const getDataKoreksiTableByUser = (props:any) => {
    const{dataMe} = props;

    const [datas, setDatas] = useState<any>([]);
    const [user_uuid, set_user_uuid] = useState<any>(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [status_code, set_status_code] = useState<any>(1);

    const dispatch = useDispatch();

    useEffect(()=>{
        set_user_uuid(dataMe.uuid)
    },[dataMe])

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.koreksi2
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDatas(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetKoreksis())
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        console.log(status_code, 'status code')
        if(user_uuid !== null){
            if(user_uuid !== undefined){
                const paramsObj : any = {limit, page, user_uuid, status_code};
                const searchParams = new URLSearchParams(paramsObj);
                dispatch(getKoreksisTableByUser(searchParams));
            }
        }
    },[limit, page, user_uuid, status_code]);

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

    return {datas, page, limit, allPage, status_code, set_status_code, nextPage, prevPage}
}

//general data for user
export const getGeneralDataUser = (props:any) => {
    const{dataMe} = props;

    const [datas, setDatas] = useState<any>([]);
    const [user_uuid, set_user_uuid] = useState<any>(null);

    const dispatch = useDispatch();

    useEffect(()=>{
        set_user_uuid(dataMe.uuid)
    },[dataMe])

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.koreksi
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDatas(data && data.datas && data.datas.data);
                dispatch(resetKoreksis())
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(user_uuid !== null){
            if(user_uuid !== undefined){
                const paramsObj : any = {user_uuid};
                const searchParams = new URLSearchParams(paramsObj);
                dispatch(getKoreksisByUser(searchParams));
            }
        }
    },[user_uuid]);

    return {datas}
}

//general data for user
export const getGeneralDataApprover = (props:any) => {
    const{dataMe} = props;

    const [datas, setDatas] = useState<any>([]);
    const [id, setId] = useState<any>(null);

    const dispatch = useDispatch();

    useEffect(()=>{
        setId(dataMe.uuid)
    },[dataMe])

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.koreksi
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDatas(data);
                dispatch(resetKoreksis())
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(id !== null){
            if(id !== undefined){
                dispatch(getKoreksisByApprover({id}));
            }
        }
    },[id]);

    return {datas}
}


export const getDataKoreksiById = (props:any) => {
    const {uuid} = props;

    const [datas, setDatas] = useState<any>([]);
    const dispatch = useDispatch();
    
  
    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.koreksi
    );
  
    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                console.log(data, 'datas')
                setDatas(data && data.datas && data.datas.data);
                dispatch(resetKoreksis())
            }
        }
    },[data, isSuccess, isLoading])
  
    useEffect(()=>{
        dispatch(getKoreksisById({uuid}));
    },[]);

    return {datas}
}

export const actionApprover = (id:any) => {
    const [message, setMessage] = useState<any>(null)
    const dispatch = useDispatch();

    const {message:messageKoreksi, isSuccess, isLoading} = useSelector(
        (state : any) => state.koreksi
    );

    useEffect(()=>{
        if(messageKoreksi && isSuccess){
            if(!isLoading){
                setMessage(messageKoreksi);
                dispatch(resetKoreksis())
                dispatch(getKoreksisById({id}));
            }
        }
    },[messageKoreksi, isSuccess, isLoading])

    const clickAction = (code : any) => {
        dispatch(approverKoreksis({id, codeStatusKoreksi:code}));
    }

    return {clickAction, message}
}