import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getPendapatansTableById, 
    getPendapatansTable,
    getPendapatansById, 
    resetPendapatans 
} from "../../stores/features/pendapatanSlice";
import qrcode from 'qrcode';

export const getDataPendapatansTableById = (datas:any) => {
    const [id, setId] =useState<any>(null);
    const [type, setType] = useState<any>(1);
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    useEffect(()=>{
        setId(datas.me && datas.me.uuid);
        setType(datas.type);
    },[datas])
    
    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pendapatan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetPendapatans());
            }
        }
    },[data]);

    useEffect(()=>{
        const paramsObj : any = {page, limit, type, search};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getPendapatansTableById(searchParams));
    },[limit, page, id, type, search]);

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

    return {id, setId, type, setType, search, setSearch, dataResult, setDataResult, limit, setLimit, page, setPage, nextPage, prevPage, allPage}
}

export const getDataPendapatansTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();
    
    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pendapatan
    );

    

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetPendapatans());
            }
        }
    },[data]);

    useEffect(()=>{
        const paramsObj : any = {page, limit, search};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getPendapatansTable(searchParams));
    },[limit, page, search]);

    const reload = () => {
        const paramsObj : any = {page, limit, search};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getPendapatansTable(searchParams));
    }

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

    return {reload, search, setSearch, dataResult, setDataResult, limit, setLimit, page, setPage, nextPage, prevPage, allPage}
}

export const getDataPendapatansById = (datas:any) => {
    const [id, setId] = useState(datas && datas.id)
    const [linkQr, setLinkQr] = useState('');
    const [data, setData] = useState<any>([]);
    const [totalPendapatan, setTotalPendapatan] = useState(0);
    const [totalPengeluaran, setTotalPengeluaran] = useState(0);

    const dispatch = useDispatch();

    const generateQR = async (text:any) => {
        try {
            setLinkQr(await qrcode.toDataURL(text))
        } catch (err) {
            console.error(err)
        }
    }

    const {data:pendapatan, isSuccess:isPendapatanSuccess, isLoading:isPendapatanLoading} = useSelector(
        (state : any) => state.pendapatan
    )

    useEffect(()=>{
        if(pendapatan && isPendapatanSuccess){
            if(!isPendapatanLoading){
                setData(pendapatan && pendapatan.datas && pendapatan.datas.data);
            }
        }
    },[pendapatan, isPendapatanSuccess, isPendapatanLoading])

    useEffect(()=>{
        const totalPengeluaran = Number(data.zakat) + Number(data.iuran_koperasi) + Number(data.potongan_pinjaman) + Number(data.potongan_jht) + Number(data.potongan_bpjs)
                +Number(data.potongan_pensiun) + Number(data.adjustment_minus) + Number(data.pph21) + Number(data.tunjangan_jht)
                +Number(data.tunjangan_pensiun) + Number(data.tunjangan_jkk) + Number(data.tunjangan_jkm) + Number(data.tunjangan_bpjs)
                +Number(data.tax);  

        const totalPendapatan =  Number(data.basic_salary) + Number(data.tunjangan_jabatan) + Number(data.incentive) + Number(data.kjk)
                +Number(data.rapel) + Number(data.adjustment) + Number(data.overtime_allowance) + Number(data.tunjangan_jht)
                +Number(data.tunjangan_pensiun) + Number(data.tunjangan_jkk)+ Number(data.tunjangan_jkm) + Number(data.tunjangan_bpjs)
                +Number(data.tax);

        setTotalPendapatan(totalPendapatan);
        setTotalPengeluaran(totalPengeluaran);
        generateQR(import.meta.env.VITE_REACT_APP_URL+'/pendapatan/slip/'+data.uuid);
    },[data])

    

    useEffect(()=>{
        dispatch(getPendapatansById({id}))
    },[id]);

    return {data, totalPendapatan, totalPengeluaran, generateQR, linkQr}
}