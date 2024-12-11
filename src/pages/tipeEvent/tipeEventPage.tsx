import Table8 from '../../components/tableTemplate/table8';
import { getDataTipeEventTable } from '../../features/tipeEvent/tipeEvent';

const tipeEventPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataTipeEventTable();

    return (
        <div className='w-full'>
            <Table8
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