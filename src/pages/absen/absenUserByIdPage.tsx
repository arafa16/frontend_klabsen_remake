import { useEffect, useState } from 'react'
// import CalendarUser from "../../components/calendar/calendarUser";
import dayjs from 'dayjs';
// import { SlideOverDateKoreksiUser } from '../../features/absen/SlideOverDateKoreksiUser';
// import { SlideOverDate } from '../../features/absen/SlideOverDate';
// import { getMeAuth } from "../../features/auth/meAuth";
import { getAbsenById } from "../../features/absen/absenByUser";
import { getMessageShow } from "../../features/messageShow";
import { eventDataDate } from '../../features/event/event';
import { useParams } from 'react-router-dom';

import { SlideOverEditDate } from '../../features/absen/SlideOverEditDate';
import { SlideOverEditEvent } from '../../features/absen/SlideOverEditEvent';
import CalendarAdmin from '../../components/calendar/calendarAdmin';
import { getDataUserById } from '../../features/user/user';

const AbsenUserByIdPage = () => {
    const {uuid} = useParams()

    const [message, setMessage] = useState<any>(null)
    const [dateSetting, setDateSetting] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));

    //get data event
    const {datas:dataEventInternal} = eventDataDate();

    const {dataResult:dataAbsen} = getAbsenById(uuid);

    const {dataResult, reload} = getDataUserById({id:uuid})

    const {
        message: messageCreate, 
        form : formDate, 
        setOpen, setDataInfo, 
        setDataUser
    } = SlideOverEditDate({uuid});

    const {
        message: messageUpdate, 
        form : formUpdate, 
        setOpen : setOpenUpdate, 
        setDataInfo : setDataInfoUpdate,
        getDataEvent
    } = SlideOverEditEvent({uuid});
    
    useEffect(()=>{
        setMessage(messageCreate);
    },[messageCreate]);

    useEffect(()=>{
        setMessage(messageUpdate);
    },[messageUpdate]);

    //message
    const messageShow = getMessageShow(message);

    const clickEvent = async(info : any) => {
        if(info.groupId !== 'event'){
            getDataEvent(info.publicId);
            setOpenUpdate(true)
        }
    }

    //click date
    const clickDate = (info : any) => {
        setOpen(true);
        setDataInfo(info);
        setDataUser(dataResult);
    }

    return (
        <>
            {messageShow}
            {formDate}
            {formUpdate}
            <div className="grid grid-cols-12 gap-5 mt-5 text-xs">
                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <div className="p-5 box">
                        <CalendarAdmin
                            dataAbsen = {dataAbsen}
                            dataEventInternal = {dataEventInternal}
                            clickEvent = {clickEvent}
                            clickDate = {clickDate}
                            dateSetting={dateSetting}
                        />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default AbsenUserByIdPage