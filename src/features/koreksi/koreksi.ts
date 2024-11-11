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
                dispatch(getKoreksisTableByUser({limit, page, id, statusCode}));
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

//general data for user
export const getGeneralDataUser = (props:any) => {
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
                dispatch(getKoreksisByUser({id}));
            }
        }
    },[id]);

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
    const {id} = props;

    const [datas, setDatas] = useState<any>([]);
    const dispatch = useDispatch();
    
  
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
        dispatch(getKoreksisById({id}));
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