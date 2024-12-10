import Table1 from '../../components/tableTemplate/table1';
import { getDataTipeNotificationTable } from '../../features/tipeNotification/tipeNotification';

const tipeNotificationPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataTipeNotificationTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/tipeNotification/edit"
                linkCreate="/tipeNotification/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default tipeNotificationPage