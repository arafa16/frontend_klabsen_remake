import FormCreateEvent from '../../components/event/formCreateEvent'
import { createDataEvent } from '../../features/event/event'

const createEvent = () => {
    
    const {
        name, setName,
        tanggal_mulai, set_tanggal_mulai,
        tanggal_selesai, set_tanggal_selesai,
        tipe_event_id, set_tipe_event_id,
        dataTipeEvents, setDataTipeEvents,
        code, setCode,
        is_active, set_is_active,
        submitEvent
    } = createDataEvent()

    return (
        <div className='text-xs'>
            <FormCreateEvent
                name={name}
                setName={setName}
                tanggal_mulai={tanggal_mulai}
                set_tanggal_mulai={set_tanggal_mulai}
                tanggal_selesai={tanggal_selesai}
                set_tanggal_selesai={set_tanggal_selesai}
                tipe_event_id={tipe_event_id}
                set_tipe_event_id={set_tipe_event_id}
                code={code}
                setCode={setCode}
                is_active={is_active}
                set_is_active={set_is_active}
                dataTipeEvents={dataTipeEvents}
                linkBack={'/event'}
                submitEvent={submitEvent}
            />
        </div>
    )
}

export default createEvent