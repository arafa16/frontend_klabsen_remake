import Table1 from '../../components/tableTemplate/table1';
import { getDataStatusTable } from '../../features/status/status';

const statusPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataStatusTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/status/edit"
                linkCreate="/status/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default statusPage