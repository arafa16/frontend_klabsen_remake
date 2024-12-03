import { useDispatch, useSelector } from "react-redux";
import { 
    // createStatusPerkawinans, 
    // deleteStatusPerkawinans, 
    getStatusPerkawinans, 
    // getStatusPerkawinansById, 
    // getStatusPerkawinansTable, 
    resetStatusPerkawinan, 
    // updateStatusPerkawinans 
} from "../../stores/features/statusPerkawinanSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataStatusPerkawinanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusPerkawinan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetStatusPerkawinan());
            }
        }
    })

    useEffect(()=>{
        dispatch(getStatusPerkawinans());
    },[])

    return {dataResult}
}

// export const getDataStatusPerkawinanTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.statusPerkawinan
//     );

//     useEffect(()=>{
//         dispatch(getStatusPerkawinansTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetStatusPerkawinan());
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

// export const createDataStatusPerkawinan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.statusPerkawinan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/statusPerkawinan');
//                 dispatch(resetStatusPerkawinan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createStatusPerkawinans({
//             uuid, name, code, isActive
//         }));
//     }

//     return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const updateDataStatusPerkawinan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data:banks, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.statusPerkawinan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/statusPerkawinan');
//                 dispatch(resetStatusPerkawinan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getStatusPerkawinansById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && banks){
//             if(!isLoading){
//                 setName(banks && banks.name);
//                 setCode(banks && banks.code);
//                 setIsActive(banks && banks.isActive ? '1' : '0');
//                 dispatch(resetStatusPerkawinan());
//             }
//         }
//     },[banks, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/statusPerkawinan');
//                 dispatch(resetStatusPerkawinan());
//             }
//         }
//     },[isSuccess, message])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updateStatusPerkawinans({
//             uuid, name, code, isActive
//         }));
//     }

//     return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const deleteDataStatusPerkawinan = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.statusPerkawinan
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/statusPerkawinan');
//                 dispatch(resetStatusPerkawinan());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const deleteData = () => {
//         dispatch(deleteStatusPerkawinans({uuid}));
//     }

//     return {deleteData, isLoading}
// }