import { useDispatch, useSelector } from "react-redux";
import { 
    // createContacts, 
    getContacts, 
    // getContactsTable,
    // getContactsById, 
    resetContact, 
    // updateContacts,
    // deleteContacts
} from "../../stores/features/contactSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataContactSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.contact
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetContact());
            }
        }
    })

    useEffect(()=>{
        dispatch(getContacts());
    },[])

    return {dataResult}
}

// export const getDataContactTable = () => {
//     const [dataResult, setDataResult] = useState([]);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const [allPage, setAllPage] = useState(0);

//     const dispatch = useDispatch();

//     const {data, isSuccess, isLoading} = useSelector(
//         (state : any) => state.contact
//     );

//     useEffect(()=>{
//         dispatch(getContactsTable({
//             limit, page
//         }));
//     },[limit, page]);

//     useEffect(()=>{
//         if(isSuccess && data){
//             if(!isLoading){
//                 setDataResult(data);
//                 countData(data.count);
//                 dispatch(resetContact());
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

// export const createDataContact = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.contact
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/contact');
//                 dispatch(resetContact());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const createDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(createContacts({
//             uuid, name, code, isActive
//         }));
//     }

//     return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const updateDataContact = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const [name, setName] = useState('');
//     const [code, setCode] = useState('');
//     const [isActive, setIsActive] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data:banks, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.contact
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/contact');
//                 dispatch(resetContact());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     useEffect(()=>{
//         dispatch(getContactsById({uuid}));
//     },[uuid]);

//     useEffect(()=>{
//         if(isSuccess && banks){
//             if(!isLoading){
//                 setName(banks && banks.name);
//                 setCode(banks && banks.code);
//                 setIsActive(banks && banks.isActive ? '1' : '0');
//                 dispatch(resetContact());
//             }
//         }
//     },[banks, isSuccess, isLoading]);

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/contact');
//                 dispatch(resetContact());
//             }
//         }
//     },[isSuccess, message])

//     const changeDataSetting = (e : any) => {
//         e.preventDefault();
//         dispatch(updateContacts({
//             uuid, name, code, isActive
//         }));
//     }

//     return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
// }

// export const deleteDataContact = (datas:any) => {
//     const [uuid, setUuid] = useState(datas && datas.uuid);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, isSuccess, message, isLoading} = useSelector(
//         (state : any) => state.contact
//     )

//     useEffect(()=>{
//         if(isSuccess && message){
//             if(!isLoading){
//                 navigate('/contact');
//                 dispatch(resetContact());
//             }
//         }
//     },[isSuccess, message, isLoading])

//     const deleteData = () => {
//         dispatch(deleteContacts({uuid}));
//     }

//     return {deleteData, isLoading}
// }