import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { 
  getEvents, 
  getEventsByMonth, 
  getEventsTable, 
  createEvents, 
  getEventsById,
  updateEvents,
  deleteEvents,
  resetEvents 
} from "../../stores/features/eventSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { getTipeEvents, resetTipeEvent } from '../../stores/features/tipeEventSlice';

export const eventDataDate = () => {
  const [datas, setDatas] = useState<any>([]);

  const dispatch = useDispatch();

  const {data, isSuccess, isLoading} = useSelector(
    (state : any) => state.event
  )

  useEffect(()=>{
    if(isSuccess && data){
      if(!isLoading){
        setDatas(data && data.datas && data.datas.data);
        dispatch(resetEvents());
      }
    }
  },[data, isSuccess, isLoading])

  useEffect(()=>{
      dispatch(getEvents());
  },[]);

  return {datas}
}

export const eventData = () => {
    const [dataEvents, setDataEvents] = useState<any>([]);
    const [bulan, setBulan] = useState(dayjs(Date.now()).format("M"));
    const [tahun, setTahun] = useState(dayjs(Date.now()).format("YYYY"));
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();
    // get data event

    const {data, isSuccess, isLoading} = useSelector(
      (state : any) => state.event
    )

    useEffect(()=>{
        const paramsObj : any = {bulan, tahun, limit, page};
        const searchParams = new URLSearchParams(paramsObj);
        dispatch(getEventsByMonth(searchParams));
    },[bulan, tahun, limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
          if(!isLoading){
            setDataEvents(data && data.datas && data.datas.data && data.datas.data.rows);
            countData(data && data.datas && data.datas.data && data.datas.data.count);
            dispatch(resetEvents());
          }
        }
    },[data, isSuccess])

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

    return {dataEvents, page, limit, nextPage, prevPage, allPage}
}

export const eventTable = () => {
  const dispatch = useDispatch();
  const [dataResult, setDataResult] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);

  const {data, isSuccess, isLoading} = useSelector(
      (state : any) => state.event
  )

  useEffect(()=>{
      dispatch(getEventsTable({
          limit, page
      }));
  },[limit, page]);

  useEffect(()=>{
      if(isSuccess && data){
          if(!isLoading){
            setDataResult(data && data.datas && data.datas.data);
            dispatch(resetEvents());
            countData(data && data.datas && data.datas.data && data.datas.data.count);
          }
      }
  },[data, isSuccess, isLoading])

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

  return {
    dataResult, 
    limit, setLimit, 
    page, setPage, 
    nextPage,
    prevPage,
    allPage
  }
}

export const createDataEvent = () => {
  const [name, setName] = useState('');
  const [tanggal_mulai, set_tanggal_mulai] = useState('');
  const [tanggal_selesai, set_tanggal_selesai] = useState('');
  const [tipe_event_id, set_tipe_event_id] = useState('');
  const [dataTipeEvents, setDataTipeEvents] = useState([]);
  const [note, setNote] = useState('');
  const [code, setCode] = useState('');
  const [is_active, set_is_active] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isSuccess: isEventSuccess, message:messageEvent, isLoading : isEventLoading} = useSelector(
      (state : any) => state.event
  )

  const {data, isSuccess, isLoading} = useSelector(
      (state : any) => state.tipeEvent
  )

  useEffect(()=>{
      if(data && isSuccess){
          if(!isLoading){
              setDataTipeEvents(data && data.datas && data.datas.data);
              dispatch(resetTipeEvent());
          }
      }
  },[data, isSuccess, isLoading])

  useEffect(()=>{
      dispatch(getTipeEvents());
  },[])

  useEffect(()=>{
      if(isEventSuccess && messageEvent){
          if(!isEventLoading){
              navigate('/event');
              dispatch(resetEvents());
          }
      }
  },[isEventSuccess, messageEvent, isEventLoading])

  const submitEvent = (e : any) => {
      e.preventDefault();
      dispatch(createEvents({
          name, 
          bulan:dayjs(tanggal_mulai).format('M'),
          tahun:dayjs(tanggal_mulai).format('YYYY'),
          tanggal_mulai, 
          tanggal_selesai, 
          tipe_event_id, 
          note,
          code, 
          is_active
      }));
  }

  return {
    name, setName,
    tanggal_mulai, set_tanggal_mulai,
    tanggal_selesai, set_tanggal_selesai,
    tipe_event_id, set_tipe_event_id,
    dataTipeEvents, setDataTipeEvents,
    note, setNote,
    code, setCode,
    is_active, set_is_active,
    submitEvent
  }
}

export const updateDataEvent = (props:any) => {
    const {id} = props;
    const [name, setName] = useState('');
    const [tanggal_mulai, set_tanggal_mulai] = useState('');
    const [tanggal_selesai, set_tanggal_selesai] = useState('');
    const [tipe_event_id, set_tipe_event_id] = useState('');
    const [dataTipeEvents, setDataTipeEvents] = useState([]);
    const [note, setNote] = useState('');
    const [code, setCode] = useState('');
    const [is_active, set_is_active] = useState('');
    const [message, setMessage] = useState<any>(null)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data: dataEvent, isSuccess: isEventSuccess, message:messageEvent, isLoading : isEventLoading} = useSelector(
      (state : any) => state.event
    )

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.tipeEvent
    )

    useEffect(()=>{
        dispatch(getEventsById({id}));
    },[]);

    useEffect(()=>{
        if(isEventSuccess && dataEvent){
          if(!isLoading){
            setName(dataEvent && dataEvent.datas && dataEvent.datas.data &&  dataEvent.datas.data.name);
            set_tanggal_mulai(dayjs(dataEvent && dataEvent.datas && dataEvent.datas.data &&  dataEvent.datas.data.tanggal_mulai).format('YYYY-MM-DD HH:mm:ss') );
            set_tanggal_selesai(dayjs(dataEvent && dataEvent.datas && dataEvent.datas.data &&  dataEvent.datas.data.tanggal_selesai).format('YYYY-MM-DD HH:mm:ss'));
            set_tipe_event_id(dataEvent && dataEvent.datas && dataEvent.datas.data &&  dataEvent.datas.data.tipe_event &&  dataEvent.datas.data.tipe_event.uuid);
            setNote(dataEvent && dataEvent.datas && dataEvent.datas.data &&  dataEvent.datas.data.note);
            setCode(dataEvent && dataEvent.datas && dataEvent.datas.data &&  dataEvent.datas.data.code);
            set_is_active(dataEvent && dataEvent.datas && dataEvent.datas.data &&  dataEvent.datas.data.is_active ? '1' : '0');
            dispatch(resetEvents());
          }
        }
    },[dataEvent, isEventSuccess, isLoading]);


    useEffect(()=>{
      if(data && isSuccess){
          if(!isLoading){
              setDataTipeEvents(data && data.datas && data.datas.data);
              dispatch(resetTipeEvent());
          }
      }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        dispatch(getTipeEvents());
    },[])

    useEffect(()=>{
      if(isEventSuccess && messageEvent){
          if(!isEventLoading){
              setMessage(messageEvent);
              navigate('/event');
              dispatch(resetEvents());
          }
      }
    },[isEventSuccess, messageEvent, isEventLoading])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateEvents({
            id, 
            name, 
            bulan:dayjs(tanggal_mulai).format('M'),
            tahun:dayjs(tanggal_mulai).format('YYYY'),
            tanggal_mulai, 
            tanggal_selesai, 
            tipe_event_id, 
            note,
            code, 
            is_active
        }));
    }

    return {
      name, setName,
      tanggal_mulai, set_tanggal_mulai,
      tanggal_selesai, set_tanggal_selesai,
      tipe_event_id, set_tipe_event_id,
      dataTipeEvents, setDataTipeEvents,
      note, setNote,
      code, setCode,
      changeDataSetting,
      is_active, set_is_active,
    }
}

export const deleteDataEvent = (props:any) => {
  const {id} = props;
  const [message, setMessage] = useState<any>(null)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {data: dataEvent, isSuccess: isEventSuccess, message:messageEvent, isLoading : isEventLoading} = useSelector(
    (state : any) => state.event
  )

  useEffect(()=>{
    if(isEventSuccess && messageEvent){
        if(!isEventLoading){
            setMessage(messageEvent && messageEvent.datas && messageEvent.datas.data );
            navigate('/event');
            dispatch(resetEvents());
        }
    }
  },[isEventSuccess, messageEvent, isEventLoading])

  const deleteDataSetting = () => {
    dispatch(deleteEvents({
        id
    }));
  }

  return {deleteDataSetting}
}