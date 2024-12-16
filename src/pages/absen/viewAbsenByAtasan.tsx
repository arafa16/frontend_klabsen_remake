import { useEffect, useState } from 'react'
// import CalendarUser from "../../components/calendar/calendarUser";
import dayjs from 'dayjs';
// import { SlideOverDateKoreksiUser } from '../../features/absen/SlideOverDateKoreksiUser';
// import { SlideOverDate } from '../../features/absen/SlideOverDate';
// import { getMeAuth } from "../../features/auth/meAuth";
import { getAbsenById } from "../../features/absen/absenByUser";
import { getMessageShow } from "../../features/messageShow";
import { eventDataDate } from '../../features/event/event';
import { useNavigate, useParams } from 'react-router-dom';

import CalendarAdmin from '../../components/calendar/calendarAdmin';
import Button from '../../base-components/Button';

const viewAbsenByAtasan = () => {
    const {uuid} = useParams()

    const [message, setMessage] = useState<any>(null)
    const [dateSetting, setDateSetting] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));

    const navigate = useNavigate();

    //get data event
    const {datas:dataEventInternal} = eventDataDate();

    const {dataResult:dataAbsen, dataUser} = getAbsenById(uuid);

    //message
    const messageShow = getMessageShow(message);

    return (
        <>
            {messageShow}
            <div className="grid grid-cols-12 gap-5 mt-5 text-xs">
                <div className="col-span-12 xl:col-span-8">
                    <div className="p-5 box">
                        <CalendarAdmin
                            dataAbsen = {dataAbsen}
                            dataEventInternal = {dataEventInternal}
                            clickEvent = ''
                            clickDate = ''
                            dateSetting={dateSetting}
                        />
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4">
                    <div className='flex justify-between'>
                        <Button
                            variant='secondary'
                            size='sm'
                            >
                                {dataUser && dataUser.name}
                        </Button>
                        <Button
                            variant='primary'
                            size='sm'
                            onClick={()=>navigate(-1)}
                            >
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default viewAbsenByAtasan