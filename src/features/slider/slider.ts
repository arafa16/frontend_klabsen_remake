import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getSliderTable, 
    createSlider, 
    resetSlider, 
    getSliderById, 
    deleteSliderById 
} from "../../stores/features/sliderSlice";
import { useNavigate } from "react-router-dom";

export const getDataSliderTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.slider
    );

    useEffect(()=>{
        const paramsObj : any = {page, limit};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getSliderTable(searchParams));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                countData(data && data.datas && data.datas.data && data.datas.data.count);
                dispatch(resetSlider());
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

export const getDataSliderById = (datas:any) => {

    const [dataResult, setDataResult] = useState<any>(null);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.slider
    );

    useEffect(()=>{
        dispatch(getSliderById({uuid:datas.uuid}));
    },[datas.uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetSlider());
            }
        }
    },[data, isSuccess, isLoading]);

    return {dataResult}
}

export const deleteDataSliderById = () => {

    const [message, setMessage] = useState<any>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message:messageSlider, isLoading} = useSelector(
        (state : any) => state.slider
    );

    const deleteSlider = (uuid:any) => {
        dispatch(deleteSliderById({uuid}));
    }

    useEffect(()=>{
        if(isSuccess && messageSlider){
            if(!isLoading){
                setMessage(messageSlider && messageSlider.datas && messageSlider.datas.data)
                dispatch(resetSlider());
                navigate(-1);
            }
        }
    },[messageSlider, isSuccess, isLoading]);

    return {message, deleteSlider, isLoading}
}

export const createDataSlider = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [sequence, setSequence] = useState<any>(0);
    const [urlFile, setUrlFile] = useState('');
    const [message, setMessage] = useState<any>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message:messageFile, isLoading} = useSelector(
        (state : any) => state.slider
    );

    useEffect(()=>{
        if(isSuccess && messageFile){
            if(!isLoading){
                setFile('');
                setUrlFile('');
                setSequence(0);
                setName('')
                setMessage(messageFile && messageFile.datas && messageFile.datas.data);
                dispatch(resetSlider());
                navigate(-1);
            }
        }
    },[isSuccess, messageFile, isLoading])

    const changeFile = (e : any) => {
        const getFile = e.target.files[0];
        setUrlFile(URL.createObjectURL(getFile));
        setFile(getFile);
    }

    const uploadFile = (e :any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('sequence', sequence);

        dispatch(createSlider({
            formData
        }));
    }

    return {
        isLoading,
        name, setName,
        file, setFile,
        urlFile, setUrlFile,
        sequence, setSequence,
        changeFile, uploadFile
    }
}