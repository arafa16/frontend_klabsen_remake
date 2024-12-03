import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { 
    // createPendidikans, 
    // deletePendidikans, 
    getPendidikans, 
    // getPendidikansById, 
    // getPendidikansTable, 
    resetPendidikan, 
    // updatePendidikans 
} from "../../stores/features/pendidikanSlice";
import { useNavigate } from "react-router-dom";

export const getDataPendidikanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pendidikan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                resetPendidikan();
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        dispatch(getPendidikans());
    },[])

    return {dataResult}
}

// export const getDataPendidikanTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.pendidikan
//     );

//     useEffect(()=>{
//         dispatch(getPendidikansTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetPendidikan());
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

// export const createDataPendidikan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.pendidikan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/pendidikan');
//                 dispatch(resetPendidikan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createPendidikans({
//             uuid, name, code, isActive
//         }));
//     }

//     return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const updateDataPendidikan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data:banks, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.pendidikan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/pendidikan');
//                 dispatch(resetPendidikan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getPendidikansById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && banks){
//             if(!isLoading){
//                 setName(banks && banks.name);
//                 setCode(banks && banks.code);
//                 setIsActive(banks && banks.isActive ? '1' : '0');
//                 dispatch(resetPendidikan());
//             }
//         }
//     },[banks, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/pendidikan');
//                 dispatch(resetPendidikan());
//             }
//         }
//     },[isSuccess, message])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updatePendidikans({
//             uuid, name, code, isActive
//         }));
//     }

//     return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const deleteDataPendidikan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.pendidikan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/pendidikan');
//                 dispatch(resetPendidikan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getPendidikansById({uuid}));
//     },[uuid]);

//     const deleteData = () => {
//         dispatch(deletePendidikans({uuid}));
//     }

//     return {deleteData, isLoading}
// }