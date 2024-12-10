import Table1 from '../../components/tableTemplate/table1';
import { getDataGroupTable } from '../../features/group/group';

const groupPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataGroupTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/group/edit"
                linkCreate="/group/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default groupPage