import { useDispatch, useSelector } from "react-redux";
import { getAtasans, resetAtasans } from "../../stores/features/atasanSlice";
import { useEffect, useState } from "react";

export const getDataAtasanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.atasan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data && data.datas && data.datas.data);
                dispatch(resetAtasans());
            }
        }
    })

    useEffect(()=>{
        dispatch(getAtasans());
    },[])

    return {dataResult}
}