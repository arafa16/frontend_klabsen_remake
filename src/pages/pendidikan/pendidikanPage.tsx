import Table1 from '../../components/tableTemplate/table1';
import { getDataPendidikanTable } from '../../features/pendidikan/pendidikan';

const pendidikanPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataPendidikanTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/pendidikan/edit"
                linkCreate="/pendidikan/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default pendidikanPage