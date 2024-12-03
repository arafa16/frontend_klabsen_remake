import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { 
    // createJamOperasionalGroups, 
    // deleteJamOperasionalGroups, 
    getJamOperasionalGroups, 
    // getJamOperasionalGroupsById, 
    // getJamOperasionalGroupsTable, 
    resetJamOperasionalGroup, 
    // updateJamOperasionalGroups 
} from '../../stores/features/jamOperasionalGroupSlice';
import { useNavigate } from "react-router-dom";

export const getDataJamOperasionalGroup = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.jamOperasionalGroup
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetJamOperasionalGroup());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        dispatch(getJamOperasionalGroups());
    },[])

    return {dataResult}
}

// export const getDataJamOperasionalGroupTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.jamOperasionalGroup
//     );

//     useEffect(()=>{
//         dispatch(getJamOperasionalGroupsTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetJamOperasionalGroup());
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

// export const createDataJamOperasionalGroup = () => {
//     const [name, setName] = useState('');
//     const [keterangan, setKeterangan] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jamOperasionalGroup
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasionalGroup');
//                 dispatch(resetJamOperasionalGroup());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createJamOperasionalGroups({
//             name, keterangan, code, isActive
//         }));
//     }

//     return {createDataSetting, name, setName, keterangan, setKeterangan, code, setCode, isActive, setIsActive, isLoading}
// }

// export const updateDataJamOperasionalGroup = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [keterangan, setKeterangan] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data:banks, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jamOperasionalGroup
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasionalGroup');
//                 dispatch(resetJamOperasionalGroup());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getJamOperasionalGroupsById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && banks){
//             if(!isLoading){
//                 setName(banks && banks.name);
//                 setCode(banks && banks.code);
//                 setKeterangan(banks && banks.keterangan);
//                 setIsActive(banks && banks.isActive ? '1' : '0');
//                 dispatch(resetJamOperasionalGroup());
//             }
//         }
//     },[banks, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasionalGroup');
//                 dispatch(resetJamOperasionalGroup());
//             }
//         }
//     },[isSuccess, message])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updateJamOperasionalGroups({
//             uuid, name, keterangan, code, isActive
//         }));
//     }

//     return {changeDataSetting, name, setName, keterangan, setKeterangan, code, setCode, isActive, setIsActive, isLoading}
// }

// export const deleteDataJamOperasionalGroup = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jamOperasionalGroup
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasionalGroup');
//                 dispatch(resetJamOperasionalGroup());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const deleteData = () => {
//         dispatch(deleteJamOperasionalGroups({uuid}));
//     }

//     return {deleteData, isLoading}
// }