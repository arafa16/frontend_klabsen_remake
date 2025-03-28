import EventViewTable from '../../components/event/eventViewTable';
import { eventTable } from '../../features/event/event';

const eventPage = () => {
    
    const {
        dataResult, 
        allPage, 
        limit, setLimit, 
        page, setPage,
        nextPage,
        prevPage,
    } = eventTable();
    
    return (
        <div className='text-xs'>
            <EventViewTable 
                datas={dataResult}
                linkView="/event/edit"
                linkCreate="/event/create"
                page={page}
                allPage={allPage}
                limit={limit}
                setLimit={setLimit}
                setPage={setPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
    )
}

export default eventPage