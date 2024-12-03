import { useDispatch, useSelector } from "react-redux";
import { 
    // createBanks, 
    // deleteBanks, 
    getBanks, 
    // getBanksById, 
    // getBanksTable, 
    resetBank, 
    // updateBanks 
} from "../../stores/features/bankSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataBankSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.bank
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetBank());
            }
        }
    })

    useEffect(()=>{
        dispatch(getBanks());
    },[])

    return {dataResult}
}

// export const getDataBankTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.bank
//     );

//     useEffect(()=>{
//         dispatch(getBanksTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetBank());
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

// export const createDataBank = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.bank
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/bank');
//                 dispatch(resetBank());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createBanks({
//             uuid, name, code, isActive
//         }));
//     }

//     return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const updateDataBank = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data:banks, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.bank
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/bank');
//                 dispatch(resetBank());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getBanksById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && banks){
//             if(!isLoading){
//                 setName(banks && banks.name);
//                 setCode(banks && banks.code);
//                 setIsActive(banks && banks.isActive ? '1' : '0');
//                 dispatch(resetBank());
//             }
//         }
//     },[banks, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/bank');
//                 dispatch(resetBank());
//             }
//         }
//     },[isSuccess, message])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updateBanks({
//             uuid, name, code, isActive
//         }));
//     }

//     return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const deleteDataBank = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.bank
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/bank');
//                 dispatch(resetBank());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const deleteData = () => {
//         dispatch(deleteBanks({uuid}));
//     }

//     return {deleteData, isLoading}
// }