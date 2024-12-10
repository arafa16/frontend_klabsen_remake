import Table1 from '../../components/tableTemplate/table1';
import { getDataStatusInOutTable } from '../../features/statusInOut/statusInOut';

const statusInOutPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataStatusInOutTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/statusInOut/edit"
                linkCreate="/statusInOut/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default statusInOutPage