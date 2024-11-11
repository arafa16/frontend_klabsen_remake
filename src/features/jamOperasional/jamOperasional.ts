import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { 
    // createJamOperasionals, 
    // deleteJamOperasionals, 
    getJamOperasionals, 
    // getJamOperasionalsById, 
    // getJamOperasionalsTable, 
    resetJamOperasional, 
    // updateJamOperasionals 
} from '../../stores/features/jamOperasionalSlice';
import { useNavigate } from "react-router-dom";
// import { 
//     getJamOperasionalGroups, 
//     resetJamOperasionalGroup 
// } from "../../stores/features/jamOperasionalGroupSlice";

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

// export const getDataJamOperasionalTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.jamOperasional
//     );

//     useEffect(()=>{
//         dispatch(getJamOperasionalsTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetJamOperasional());
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

// export const createDataJamOperasional = () => {
//     const [name, setName] = useState('');
//     const [jamMasuk, setJamMasuk] = useState('');
//     const [jamPulang, setJamPulang] = useState('');
//     const [keterangan, setKeterangan] = useState('');
//     const [jamOperasionalGroupId, setJamOperasionalGroupId] = useState('');
//     const [jamOperasionalGroupSelect, setJamOperasionalGroupSelect] = useState([]);
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jamOperasional
//     )
    
//     const {data:dataJamOperasionalGroup, isSuccess:isSuccessJamOperasionalGroup, isLoading:isLoadingJamOperasionalGroup} = useSelector(
//         (state : any) => state.jamOperasionalGroup
//     );

//     useEffect(()=>{
//         if(dataJamOperasionalGroup && isSuccessJamOperasionalGroup){
//             if(!isLoadingJamOperasionalGroup){
//                 setJamOperasionalGroupSelect(dataJamOperasionalGroup);
//                 dispatch(resetJamOperasionalGroup());
//             }
//         }
//     },[dataJamOperasionalGroup, isSuccessJamOperasionalGroup, isLoadingJamOperasionalGroup])

//     useEffect(()=>{
//         dispatch(getJamOperasionalGroups());
//     },[])

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasional');
//                 dispatch(resetJamOperasional());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createJamOperasionals({
//             name, jamMasuk, jamPulang, keterangan, jamOperasionalGroupId, code, isActive
//         }));
//     }

//     return {
//         createDataSetting, 
//         name, setName,
//         jamMasuk, setJamMasuk, 
//         jamPulang, setJamPulang, 
//         keterangan, setKeterangan, 
//         jamOperasionalGroupId, setJamOperasionalGroupId,
//         jamOperasionalGroupSelect, setJamOperasionalGroupSelect,
//         code, setCode, 
//         isActive, setIsActive, 
//         isLoading
//     }
// }

// export const updateDataJamOperasional = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
    
//     const [name, setName] = useState('');
//     const [jamMasuk, setJamMasuk] = useState('');
//     const [jamPulang, setJamPulang] = useState('');
//     const [keterangan, setKeterangan] = useState('');
//     const [jamOperasionalGroupId, setJamOperasionalGroupId] = useState('');
//     const [jamOperasionalGroupSelect, setJamOperasionalGroupSelect] = useState([]);
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jamOperasional
//     )

//     const {data:dataJamOperasionalGroup, isSuccess:isSuccessJamOperasionalGroup, isLoading:isLoadingJamOperasionalGroup} = useSelector(
//         (state : any) => state.jamOperasionalGroup
//     );

//     useEffect(()=>{
//         if(dataJamOperasionalGroup && isSuccessJamOperasionalGroup){
//             if(!isLoadingJamOperasionalGroup){
//                 setJamOperasionalGroupSelect(dataJamOperasionalGroup);
//                 dispatch(resetJamOperasionalGroup());
//             }
//         }
//     },[dataJamOperasionalGroup, isSuccessJamOperasionalGroup, isLoadingJamOperasionalGroup])

//     useEffect(()=>{
//         dispatch(getJamOperasionalGroups());
//     },[])

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasional');
//                 dispatch(resetJamOperasional());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getJamOperasionalsById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setName(data && data.name);
//                 setJamMasuk(data && data.jamMasuk);
//                 setJamPulang(data && data.jamPulang);
//                 setKeterangan(data && data.keterangan);
//                 setJamOperasionalGroupId(data.jam_operasional_group && data.jam_operasional_group.uuid);
//                 setCode(data && data.code);
//                 setIsActive(data && data.isActive ? '1' : '0');
//                 dispatch(resetJamOperasional());
//             }
//         }
//     },[data, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasional');
//                 dispatch(resetJamOperasional());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updateJamOperasionals({
//             uuid, name, jamMasuk, jamPulang, keterangan, jamOperasionalGroupId, code, isActive
//         }));
//     }

//     return {
//         changeDataSetting, 
//         name, setName,
//         jamMasuk, setJamMasuk, 
//         jamPulang, setJamPulang, 
//         keterangan, setKeterangan, 
//         jamOperasionalGroupId, setJamOperasionalGroupId,
//         jamOperasionalGroupSelect, setJamOperasionalGroupSelect,
//         code, setCode, 
//         isActive, setIsActive, 
//         isLoading
//     }
// }

// export const deleteDataJamOperasional = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.jamOperasional
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/jamOperasional');
//                 dispatch(resetJamOperasional());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const deleteData = () => {
//         dispatch(deleteJamOperasionals({uuid}));
//     }

//     return {deleteData, isLoading}
// }