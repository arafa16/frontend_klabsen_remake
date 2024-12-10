import Table1 from '../../components/tableTemplate/table1';
import { getDataTipeEventTable } from '../../features/tipeEvent/tipeEvent';

const tipeEventPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataTipeEventTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/tipeEvent/edit"
                linkCreate="/tipeEvent/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default tipeEventPage