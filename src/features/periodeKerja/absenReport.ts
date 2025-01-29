import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeriodeKerjasTable, resetPeriodeKerja } from "../../stores/features/periodeKerjaSlice";

export const reportAbsenMonth = () => {
    const [dataPeriodeKerjas, setDataPeriodeKerjas] = useState<any>([]);
    const [limit, setLimit] = useState(2);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    //get periode data

    const {data, isSuccess, isLoading, isError} = useSelector(
      (state : any) => state.periodeKerja
    )

    useEffect(()=>{
      const paramsObj : any = {limit, page, is_active:1};
      const searchParams = new URLSearchParams(paramsObj);
      dispatch(getPeriodeKerjasTable(searchParams))
    },[limit, page, allPage])

    useEffect(()=>{
        if(data && isSuccess){
          if(!isLoading){
            setDataPeriodeKerjas(data && data.datas && data.datas.data);
            countDataPeriodeKerja(data && data.datas && data.datas.data && data.datas.data.count)
            dispatch(resetPeriodeKerja());
          }
        }
    },[data, isSuccess, isLoading])

    const countDataPeriodeKerja = (allData : any) =>{
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

    return {dataPeriodeKerjas, nextPage, prevPage, page, allPage}
}