import { useDispatch, useSelector } from "react-redux";
import { 
    createPeriodeKerjas, 
    deletePeriodeKerjas, 
    getPeriodeKerjas, 
    getPeriodeKerjaSelect as getDataActiveSelect, 
    getPeriodeKerjasById, 
    getPeriodeKerjasByIdForInout, 
    getPeriodeKerjasTable, 
    resetPeriodeKerja, 
    updatePeriodeKerjas 
} from "../../stores/features/periodeKerjaSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataPeriodeKerjaSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetPeriodeKerja());
            }
        }
    })

    useEffect(()=>{
        dispatch(getPeriodeKerjas());
    },[])

    return {dataResult}
}

export const getDataPeriodeKerjaByIdForInout = () => {
    const [uuid, setUuid] = useState<any>(null);
    const [userUuid, setUserUuid] = useState<any>(null);
    
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data2, isSuccess, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    );

    useEffect(()=>{
        if(data2 && isSuccess){
            if(!isLoading){
                setDataResult(data2 && data2.datas && data2.datas.data);
                dispatch(resetPeriodeKerja());
            }
        }
    })

    useEffect(()=>{
        if(uuid !== null && uuid !== "" && userUuid !==null && userUuid !== ""){
            dispatch(getPeriodeKerjasByIdForInout({uuid, userUuid}));
        }else{
            setDataResult([]);
        }
    },[uuid, userUuid])

    return {dataResult, uuid, setUuid, userUuid, setUserUuid}
}

export const getDataPeriodeKerjaActiveSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetPeriodeKerja());
            }
        }
    })

    useEffect(()=>{
        dispatch(getDataActiveSelect());
    },[])

    return {dataResult}
}

export const getDataPeriodeKerjaTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getPeriodeKerjasTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetPeriodeKerja());
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

    return {dataResult, limit, setLimit, nextPage, prevPage, page, allPage}
}

export const createDataPeriodeKerja = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, set_name] = useState('');
    const [bulan, set_bulan] = useState('');
    const [tahun, set_tahun] = useState('');
    const [tanggal_mulai, set_tanggal_mulai] = useState('');
    const [tanggal_selesai, set_tanggal_selesai] = useState('');
    const [jumlah_hari, set_jumlah_hari] = useState('');
    const [code, set_code] = useState('');
    const [is_active, set_is_active] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createPeriodeKerjas({
            name:name,
            bulan:bulan,
            tahun:tahun,
            tanggal_mulai:tanggal_mulai,
            tanggal_selesai:tanggal_selesai,
            jumlah_hari:jumlah_hari,
            code:code,
            is_active:is_active
        }));
    }

    return {
        createDataSetting, 
        name, set_name, 
        bulan, set_bulan,
        tahun, set_tahun,
        tanggal_mulai, set_tanggal_mulai,
        tanggal_selesai, set_tanggal_selesai,
        jumlah_hari, set_jumlah_hari,
        code, set_code, 
        is_active, set_is_active, 
        isLoading
    }
}

export const updateDataPeriodeKerja = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, set_name] = useState('');
    const [bulan, set_bulan] = useState('');
    const [tahun, set_tahun] = useState('');
    const [tanggal_mulai, set_tanggal_mulai] = useState('');
    const [tanggal_selesai, set_tanggal_selesai] = useState('');
    const [jumlah_hari, set_jumlah_hari] = useState('');
    const [code, set_code] = useState('');
    const [is_active, set_is_active] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getPeriodeKerjasById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                set_name(data && data.datas && data.datas.data && data.datas.data.name);
                set_bulan(data && data.datas && data.datas.data && data.datas.data.bulan);
                set_tahun(data && data.datas && data.datas.data && data.datas.data.tahun);
                set_tanggal_mulai(data && data.datas && data.datas.data && data.datas.data.tanggal_mulai);
                set_tanggal_selesai(data && data.datas && data.datas.data && data.datas.data.tanggal_selesai);
                set_jumlah_hari(data && data.datas && data.datas.data && data.datas.data.jumlah_hari)
                set_code(data && data.datas && data.datas.data && data.datas.data.code)
                set_is_active(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0')
                dispatch(resetPeriodeKerja());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updatePeriodeKerjas({
            uuid:uuid,
            name:name,
            bulan:bulan,
            tahun:tahun,
            tanggal_mulai:tanggal_mulai,
            tanggal_selesai:tanggal_selesai,
            jumlah_hari:jumlah_hari,
            code:code,
            is_active:is_active
        }));
    }

    return {
        changeDataSetting, 
        name, set_name, 
        bulan, set_bulan,
        tahun, set_tahun,
        tanggal_mulai, set_tanggal_mulai,
        tanggal_selesai, set_tanggal_selesai,
        jumlah_hari, set_jumlah_hari,
        code, set_code, 
        is_active, set_is_active, 
        isLoading
    }
}

export const deleteDataPeriodeKerja = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deletePeriodeKerjas({uuid}));
    }

    return {deleteData, isLoading}
}