import { useDispatch, useSelector } from "react-redux";
import { 
    // createGroups, 
    // deleteGroups, 
    getGroups, 
    // getGroupsById, 
    // getGroupsTable, 
    resetGroup, 
    // updateGroups 
} from "../../stores/features/groupSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataGroupSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.group
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetGroup());
            }
        }
    })

    useEffect(()=>{
        dispatch(getGroups());
    },[])

    return {dataResult}
}

// export const getDataGroupTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.group
//     );

//     useEffect(()=>{
//         dispatch(getGroupsTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetGroup());
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

// export const createDataGroup = () => {
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.group
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/group');
//                 dispatch(resetGroup());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createGroups({
//             name, code, isActive
//         }));
//     }

//     return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const updateDataGroup = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.group
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/group');
//                 dispatch(resetGroup());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getGroupsById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setName(data && data.name);
//                 setCode(data && data.code);
//                 setIsActive(data && data.isActive ? '1' : '0');
//                 dispatch(resetGroup());
//             }
//         }
//     },[data, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/group');
//                 dispatch(resetGroup());
//             }
//         }
//     },[isSuccess, message])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updateGroups({
//             uuid, name, code, isActive
//         }));
//     }

//     return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const deleteDataGroup = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.group
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/group');
//                 dispatch(resetGroup());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const deleteData = () => {
//         dispatch(deleteGroups({uuid}));
//     }

//     return {deleteData, isLoading}
// }