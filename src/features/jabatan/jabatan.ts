import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { 
    // createJabatans, 
    // deleteJabatans, 
    getJabatans, 
    // getJabatansById, 
    // getJabatansTable, 
    resetJabatan, 
    // updateJabatans 
} from "../../stores/features/jabatanSlice";
import { useNavigate } from "react-router-dom";

export const getDataJabatanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.jabatan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetJabatan());
            }
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getJabatans());
    },[])

    return {dataResult}
}

// export const getDataJabatanTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.jabatan
//     );

//     useEffect(()=>{
//         dispatch(getJabatansTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetJabatan());
//             }
//         }
//     },[data, isSuccess, isLoading]);

//     //table
//     const countData = (allData : any) =>{
//         const count = allData / limit;
//         setAllPage(Math.ceil(count))
//     }

//     const nextPage = () => {
//         if(page < allPage){
//             const count = page + 1;
//             setPage(count);
//         }
//     }

//     const prevPage = () => {
//         if(page > 1){
//             const count = page - 1;
//             setPage(count);
//         }
//     }

//     return {dataResult, nextPage, prevPage, page, allPage}
// }

// export const createDataJabatan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jabatan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jabatan');
//                 dispatch(resetJabatan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createJabatans({
//             uuid, name, code, isActive
//         }));
//     }

//     return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const updateDataJabatan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data:banks, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jabatan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jabatan');
//                 dispatch(resetJabatan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getJabatansById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && banks){
//             if(!isLoading){
//                 setName(banks && banks.name);
//                 setCode(banks && banks.code);
//                 setIsActive(banks && banks.isActive ? '1' : '0');
//                 dispatch(resetJabatan());
//             }
//         }
//     },[banks, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jabatan');
//                 dispatch(resetJabatan());
//             }
//         }
//     },[isSuccess, message])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updateJabatans({
//             uuid, name, code, isActive
//         }));
//     }

//     return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const deleteDataJabatan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jabatan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jabatan');
//                 dispatch(resetJabatan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const deleteData = () => {
//         dispatch(deleteJabatans({uuid}));
//     }

//     return {deleteData, isLoading}
// }