import Table1 from '../../components/tableTemplate/table1';
import { getDataPenempatanTable } from '../../features/penempatan/penempatan';

const penempatanPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataPenempatanTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/penempatan/edit"
                linkCreate="/penempatan/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default penempatanPage