import { useEffect, useState } from 'react'
import CalendarUser from "../../components/calendar/calendarUser";
import dayjs from 'dayjs';
import { SlideOverDateKoreksiUser } from '../../features/absen/SlideOverDateKoreksiUser';
import { SlideOverDate } from '../../features/absen/SlideOverDate';
import { getMeAuth } from "../../features/auth/meAuth";
import { getAbsenByUser } from "../../features/absen/absenByUser";
import { getMessageShow } from "../../features/messageShow";
import { eventDataDate } from '../../features/event/event';
import ButtonAbsen from '../../components/button/buttonAbsen';

const AbsenUserPage = () => {
    const [message, setMessage] = useState<any>(null)
    const [dateSetting, setDateSetting] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));
    
    //get data event
    const {datas:dataEventInternal} = eventDataDate();

    //get data auth
    const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

    const {dataResult:dataAbsen, clickAbsen, isLoading, message:messageAbsen, reload } = getAbsenByUser(dataMe);

    useEffect(()=>{
        setMessage(messageAbsen);
    },[messageAbsen]);

    const {
        message: messageKoreksi, 
        form : formKoreksiUser, 
        setOpen, setDataInfo, 
        setDataUser
    } = SlideOverDateKoreksiUser({reload});

    const {
        form : formSlideOverDate, 
        setOpen : setOpenSlide, 
        setData,
        message : messageDate, 
        setMessage : setMessageDate
    } = SlideOverDate({reload});
    
    useEffect(()=>{
        setMessage(messageKoreksi);
    },[messageKoreksi]);

    //message
    const messageShow = getMessageShow(message);

    const clickEvent = async(info : any) => {
        if(info.event.groupId !== 'event'){
            setData(info);
            setOpenSlide(true)
        }
    }

    //click date
    const clickDate = (info : any) => {
        setOpen(true);
        setDataInfo(info);
        setDataUser(dataMe);
    }

    const clickButton = (code:any) =>{
        clickAbsen({code_tipe_absen:code, uuid:dataMe.uuid});
    }

    const clickButtonWFA = (code:any) =>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    const { latitude, longitude } = position.coords;
                    clickAbsen({code_tipe_absen:code, uuid:dataMe.uuid, latitude, longitude});
                },
                (error)=>{
                    // display an error if we cant get the users position
                    console.error('Error getting user location:', error);
                    alert(error.message)
                }
            )
        }
    }

    return (
        <>
            {messageShow}
            {formKoreksiUser}
            {formSlideOverDate}
            <div className="grid grid-cols-12 gap-5 mt-5 text-xs">
                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <div className="p-5 box">
                        <CalendarUser 
                            dataAbsen = {dataAbsen}
                            dataEventInternal = {dataEventInternal}
                            clickEvent = {clickEvent}
                            clickDate = {clickDate}
                            dateSetting={dateSetting}
                        />
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                    <div className="mb-4">
                        <ButtonAbsen 
                            name='Absen'
                            nameButton1='Masuk'
                            nameButton2='Pulang'
                            idButton1={0}
                            idButton2={1}
                            actionButton1={clickButton}
                            actionButton2={clickButton}
                            isView={dataMe.privilege && dataMe.privilege.absen_modal}
                        />
                    </div>
                    <div className="mb-4">
                        <ButtonAbsen 
                            name='Absen Shift'
                            nameButton1='Masuk'
                            nameButton2='Pulang'
                            idButton1={4}
                            idButton2={5}
                            actionButton1={clickButton}
                            actionButton2={clickButton}
                            isView={dataMe.privilege && dataMe.privilege.shift_modal}
                            isLoading={isLoading}
                        />
                    </div>
                    <div className="mb-4">
                        <ButtonAbsen 
                            name='Absen WFA'
                            nameButton1='Masuk'
                            nameButton2='Pulang'
                            idButton1={8}
                            idButton2={9}
                            actionButton1={clickButtonWFA}
                            actionButton2={clickButtonWFA}
                            isView={dataMe.privilege && dataMe.privilege.wfh_modal}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default AbsenUserPage