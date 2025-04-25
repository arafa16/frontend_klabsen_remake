import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { 
    createOvertimeTask as createData, 
    deleteOvertimeTask as deleteDataById, 
    getOvertimeTask as getDatas, 
    getOvertimeTaskById as getDataById, 
    getOvertimeTaskTable as getDataTable, 
    getOvertimeTaskTableByUser as getDataTableByUser, 
    getOvertimeTaskTableByAssignor as getDataTableByAssignor, 
    getOvertimeTaskTableBySuperior as getDataTableBySuperior, 
    resetOvertimeTask, 
    updateOvertimeTask as updateData,
    updateOvertimeTaskStatus as updateStatusData 
} from "../../stores/features/overtimeTaskSlice";
import { useNavigate } from "react-router-dom";

export const getOvertimeTask = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                resetOvertimeTask();
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        dispatch(getDatas());
    },[])

    return {dataResult}
}

export const getOvertimeTaskById = (datas:any) => {
    const [dataResult, setDataResult] = useState<any>([]);
    const uuid = datas.id;
    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                resetOvertimeTask();
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        dispatch(getDataById({uuid}));
    },[uuid])

    return {dataResult}
}

export const getDataOvertimeTaskTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getDataTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetOvertimeTask());
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

export const getDataOvertimeTaskTableByUser = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getDataTableByUser(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetOvertimeTask());
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

export const getDataOvertimeTaskTableByAssignor = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getDataTableByAssignor(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetOvertimeTask());
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

export const getDataOvertimeTaskTableBySuperior = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getDataTableBySuperior(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetOvertimeTask());
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

export const createDataOvertimeTask = () => {
    const [userId, setUserId] = useState('');
    const [timeStartTask, setTimeStartTask] = useState('');
    const [timeFinisedTask, setTimeFinisedTask] = useState('');
    const [durasiTask, setDurasiTask] = useState('');
    const [noteTask, setNoteTask] = useState('');

    const [timeStartReport, setTimeStartReport] = useState('');
    const [timeFinisedReport, setTimeFinisedReport] = useState('');
    const [durasiReport, setDurasiReport] = useState('');
    const [noteReport, setNoteReport] = useState('');

    const [assignorId, setAssignorId] = useState('');
    const [superiorId, setSuperiorId] = useState('');
    const [statusCode, setStatusCode] = useState('1');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                console.log(message, 'message')
                navigate(`/overtime/data/${message.datas.data.task.uuid}`);
                dispatch(resetOvertimeTask());
            }
        }
    },[isSuccess, message, isLoading])

    const submitData = (e : any) => {
        e.preventDefault();
        dispatch(createData({
            userId,
            timeStartTask, 
            timeFinisedTask, 
            durasiTask, 
            noteTask,
            timeStartReport,
            timeFinisedReport,
            durasiReport,
            noteReport,
            assignorId,
            superiorId,
            statusCode
        }));
    }

    return {
        submitData,
        userId, setUserId,
        timeStartTask, setTimeStartTask,
        timeFinisedTask, setTimeFinisedTask,
        durasiTask, setDurasiTask,
        noteTask, setNoteTask,
        timeStartReport, setTimeStartReport,
        timeFinisedReport, setTimeFinisedReport,
        durasiReport, setDurasiReport,
        noteReport, setNoteReport,
        assignorId, setAssignorId,
        superiorId, setSuperiorId,
        isLoading
    }
}

export const updateDataOvertimeTask = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [is_active, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/overtime/user');
                dispatch(resetOvertimeTask());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getDataById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.datas && data.datas.data && data.datas.data.name);
                setCode(data && data.datas && data.datas.data && data.datas.data.code);
                setIsActive(data && data.datas && data.datas.data && data.datas.data.is_active ? '1' : '0');
                dispatch(resetOvertimeTask());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/overtime/user');
                dispatch(resetOvertimeTask());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateData({
            uuid, name, code, is_active
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, is_active, setIsActive, isLoading}
}

export const updateDataOvertimeTaskStatus = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate(0);
                dispatch(resetOvertimeTask());
            }
        }
    },[isSuccess, message, isLoading])

    const changeDataStatus = (datas:any) => {
        // e.preventDefault();
        dispatch(updateStatusData({uuid:datas.uuid, overtime_task_status_code:datas.overtimeTaskStatusCode}));
    }

    return {changeDataStatus, isLoading}
}

export const deleteDataOvertimeTask = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.overtimeTask
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/overtime/user');
                dispatch(resetOvertimeTask());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteDataById({uuid}));
    }

    return {deleteData, isLoading}
}