import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
    getInOutsByUser, 
    createInOutsByAbsenWeb, 
    resetInOuts 
} from '../../stores/features/inOutSlice';
import dayjs from 'dayjs';

export const getAbsenByUser = (datas:any) => {
    const dispatch = useDispatch();
    const [dataResult, setDataResult] = useState<any>([]);
    const [message, setMessage] = useState<any>(null);

    const {data, message:messageInOut, isSuccess, isLoading, isError} = useSelector(
        (state: any) => state.inOut
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetInOuts());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(datas.uuid !== undefined){
            dispatch(getInOutsByUser({uuid:datas.uuid}));
        }
    },[datas]);

    useEffect(()=>{
        if(messageInOut && isSuccess){
            if(!isLoading){
                setMessage(messageInOut);
                dispatch(resetInOuts());
                dispatch(getInOutsByUser({uuid:datas.uuid}));
            }
        }
    },[messageInOut, isSuccess, isLoading])

    const clickAbsen = (data:any) => {
        const dateNow = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
        dispatch(createInOutsByAbsenWeb({
            user_uuid:data.uuid,
            tanggal_mulai:dateNow,
            tanggal_selesai:dateNow,
            code_tipe_absen:data.code_tipe_absen
        }));
    }

    return {dataResult, clickAbsen, message}
}

export const getAbsenById = (uuid:any) => {
    const dispatch = useDispatch();
    const [dataResult, setDataResult] = useState<any>([]);
    const [dataUser, setDataUser] = useState<any>({})

    const {data, message, isSuccess, isLoading, isError} = useSelector(
        (state: any) => state.inOut
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                setDataUser(data && data.datas && data.datas.user);
                dispatch(resetInOuts());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(uuid !== undefined){
            dispatch(getInOutsByUser({uuid}));
        }
    },[uuid]);

    return {dataResult, dataUser}
}