import { useParams} from 'react-router-dom';
import FormEditEvent from '../../components/event/formEditEvent';

import { deleteDataEvent, updateDataEvent } from '../../features/event/event';

const EditEvent = () => {
    const {id} = useParams();
    
    const {
        name, setName,
        tanggal_mulai, set_tanggal_mulai,
        tanggal_selesai, set_tanggal_selesai,
        tipe_event_id, set_tipe_event_id,
        dataTipeEvents, setDataTipeEvents,
        note, setNote,
        code, setCode,
        changeDataSetting,
        is_active, set_is_active,
    } = updateDataEvent({id})

    const {deleteDataSetting} = deleteDataEvent({id});

    return (
        <div>
            <FormEditEvent
                name={name}
                setName={setName}
                tanggal_mulai={tanggal_mulai}
                set_tanggal_mulai={set_tanggal_mulai}
                tanggal_selesai={tanggal_selesai}
                set_tanggal_selesai={set_tanggal_selesai}
                tipe_event_id={tipe_event_id}
                set_tipe_event_id={set_tipe_event_id}
                note={note}
                setNote={setNote}
                code={code}
                setCode={setCode}
                is_active={is_active}
                set_is_active={set_is_active}
                dataTipeEvents={dataTipeEvents}
                linkBack={'/event'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditEvent