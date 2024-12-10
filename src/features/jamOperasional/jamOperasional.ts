import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { 
    createJamOperasionals, 
    deleteJamOperasionals, 
    getJamOperasionals, 
    getJamOperasionalsById, 
    getJamOperasionalsTable, 
    resetJamOperasional, 
    updateJamOperasionals 
} from '../../stores/features/jamOperasionalSlice';
import { useNavigate } from "react-router-dom";
import { 
    getJamOperasionalGroups, 
    resetJamOperasionalGroup 
} from "../../stores/features/jamOperasionalGroupSlice";

export const getDataJamOperasional = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.jamOperasional
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetJamOperasional());
            }
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getJamOperasionals());
    },[])

    return {dataResult}
}

export const getDataJamOperasionalTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.jamOperasional
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getJamOperasionalsTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetJamOperasional());
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

export const createDataJamOperasional = () => {
    const [name, setName] = useState('');
    const [jam_masuk, set_jam_masuk] = useState('');
    const [jam_pulang, set_jam_pulang] = useState('');
    const [keterangan, set_keterangan] = useState('');
    const [jam_operasional_group_id, set_jam_operasional_group_id] = useState('');
    const [jam_operasional_group_select, set_jam_operasional_group_select] = useState([]);
    const [code, set_code] = useState('');
    const [is_active, set_is_active] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.jamOperasional
    )
    
    const {data:dataJamOperasionalGroup, isSuccess:isSuccessJamOperasionalGroup, isLoading:isLoadingJamOperasionalGroup} = useSelector(
        (state : any) => state.jamOperasionalGroup
    );

    useEffect(()=>{
        if(dataJamOperasionalGroup && isSuccessJamOperasionalGroup){
            if(!isLoadingJamOperasionalGroup){
                set_jam_operasional_group_select(dataJamOperasionalGroup && dataJamOperasionalGroup.datas && dataJamOperasionalGroup.datas.data);
                dispatch(resetJamOperasionalGroup());
            }
        }
    },[dataJamOperasionalGroup, isSuccessJamOperasionalGroup, isLoadingJamOperasionalGroup])

    useEffect(()=>{
        dispatch(getJamOperasionalGroups());
    },[])

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/jamOperasional');
                dispatch(resetJamOperasional());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        console.log('sampai')
        dispatch(createJamOperasionals({
            name, jam_masuk, jam_pulang, keterangan, jam_operasional_group_id, code, is_active
        }));
    }

    return {
        createDataSetting, 
        name, setName,
        jam_masuk, set_jam_masuk, 
        jam_pulang, set_jam_pulang, 
        keterangan, set_keterangan, 
        jam_operasional_group_id, set_jam_operasional_group_id,
        jam_operasional_group_select, set_jam_operasional_group_select,
        code, set_code, 
        is_active, set_is_active, 
        isLoading
    }
}

export const updateDataJamOperasional = (datas:any) => {
    const [uuid, set_uuid] = useState(datas && datas.uuid);
    
    const [name, setName] = useState('');
    const [jam_masuk, set_jam_masuk] = useState('');
    const [jam_pulang, set_jam_pulang] = useState('');
    const [keterangan, set_keterangan] = useState('');
    const [jam_operasional_group_id, set_jam_operasional_group_id] = useState('');
    const [jam_operasional_group_select, set_jam_operasional_group_select] = useState([]);
    const [code, set_code] = useState('');
    const [is_active, set_is_active] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.jamOperasional
    )

    const {data:dataJamOperasionalGroup, isSuccess:isSuccessJamOperasionalGroup, isLoading:isLoadingJamOperasionalGroup} = useSelector(
        (state : any) => state.jamOperasionalGroup
    );

    useEffect(()=>{
        if(dataJamOperasionalGroup && isSuccessJamOperasionalGroup){
            if(!isLoadingJamOperasionalGroup){
                set_jam_operasional_group_select(dataJamOperasionalGroup && dataJamOperasionalGroup.datas && dataJamOperasionalGroup.datas.data);
                dispatch(resetJamOperasionalGroup());
            }
        }
    },[dataJamOperasionalGroup, isSuccessJamOperasionalGroup, isLoadingJamOperasionalGroup])

    useEffect(()=>{
        dispatch(getJamOperasionalGroups());
    },[])

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/jamOperasional');
                dispatch(resetJamOperasional());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getJamOperasionalsById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                set_jam_masuk(data && data.datas && data.datas.data && data.datas.data.jam_masuk);
                set_jam_pulang(data && data.datas && data.datas.data && data.datas.data.jam_pulang);
                set_keterangan(data && data.datas && data.datas.data && data.datas.data.keterangan);
                set_jam_operasional_group_id(data && data.datas && data.datas.data && data.datas.data.jam_operasional_group && data.datas.data.jam_operasional_group.uuid);
                set_code(data && data.datas && data.datas.data && data.datas.data.code);
                set_is_active(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetJamOperasional());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/jamOperasional');
                dispatch(resetJamOperasional());
            }
        }
    },[isSuccess, message, isLoading])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateJamOperasionals({
            uuid, name, jam_masuk, jam_pulang, keterangan, jam_operasional_group_id, code, is_active
        }));
    }

    return {
        changeDataSetting, 
        name, setName,
        jam_masuk, set_jam_masuk, 
        jam_pulang, set_jam_pulang, 
        keterangan, set_keterangan, 
        jam_operasional_group_id, set_jam_operasional_group_id,
        jam_operasional_group_select, set_jam_operasional_group_select,
        code, set_code, 
        is_active, set_is_active, 
        isLoading
    }
}

export const deleteDataJamOperasional = (datas:any) => {
    const [uuid, set_uuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.jamOperasional
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/jamOperasional');
                dispatch(resetJamOperasional());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteJamOperasionals({uuid}));
    }

    return {deleteData, isLoading}
}