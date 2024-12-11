import { useDispatch, useSelector } from "react-redux";
import { 
    getDataEmailTable,
    getDataEmailById,
    createDataEmail,
    updateDataEmail,
    deleteDataEmail,
    resetDataEmail
} from "../../stores/features/dataEmailSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataEmailsTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.dataEmail
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getDataEmailTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetDataEmail());
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

    return {dataResult, nextPage, prevPage, page, allPage}
}

export const getDataEmailsById = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [dataResult, setDataResult] = useState<any>({});

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.dataEmail
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetDataEmail());
            }
        }
    })

    useEffect(()=>{
        dispatch(getDataEmailById({uuid}));
    },[])

    return {dataResult}
}

export const createDataEmails = () => {
    const [name, set_name] = useState('');
    const [from, set_from] = useState('');
    const [to, set_to] = useState('');
    const [subject, set_subject] = useState('');
    const [text_email, set_text_email] = useState('');
    const [status_email_id, set_status_email_id] = useState('');
    const [code, set_code] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.dataEmail
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/dataEmail');
                dispatch(resetDataEmail());
            }
        }
    },[isSuccess, message])

    const createData = (e : any) => {
        e.preventDefault();
        dispatch(createDataEmail({
            name, from, to, subject, text_email, status_email_id, code, is_active
        }));
    }

    return {
        createData, 
        name, set_name, 
        from, set_from,
        to, set_to,
        subject, set_subject,
        text_email, set_text_email,
        status_email_id, set_status_email_id,
        code, set_code, 
        is_active, setIsActive, 
        isLoading
    }
}

export const updateDataEmails = (datas:any) => {
    const [uuid, set_uuid] = useState(datas && datas.uuid);
    const [name, set_name] = useState('');
    const [from, set_from] = useState('');
    const [to, set_to] = useState('');
    const [subject, set_subject] = useState('');
    const [text_email, set_text_email] = useState('');
    const [status_email_id, set_status_email_id] = useState('');
    const [code, set_code] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.dataEmail
    )

    useEffect(()=>{
        dispatch(getDataEmailById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                set_name(data && data.datas && data.datas.data && data.datas.data.name);
                set_from(data && data.datas && data.datas.data && data.datas.data.from);
                set_to(data && data.datas && data.datas.data && data.datas.data.to);
                set_subject(data && data.datas && data.datas.data && data.datas.data.subject);
                set_text_email(data && data.datas && data.datas.data && data.datas.data.text_email);
                set_status_email_id(data && data.datas && data.datas.data && data.datas.data.status_email_id);
                set_code(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetDataEmail());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/dataEmail');
                dispatch(resetDataEmail());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateDataEmail({
            uuid, name, from, to, subject, text_email, status_email_id, code, is_active
        }));
    }

    return {
        changeDataSetting, 
        name, set_name, 
        from, set_from,
        to, set_to,
        subject, set_subject,
        text_email, set_text_email,
        status_email_id, set_status_email_id,
        code, set_code, 
        is_active, setIsActive, 
        isLoading
    }
}

export const deleteDataEmails = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.dataEmail
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/dataEmail');
                dispatch(resetDataEmail());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteDataEmail({uuid}));
    }

    return {deleteData, isLoading}
}