import Table1 from '../../components/tableTemplate/table1';
import { getDataStatusKoreksiTable } from '../../features/statusKoreksi/statusKoreksi';

const statusKoreksiPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataStatusKoreksiTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/statusKoreksi/edit"
                linkCreate="/statusKoreksi/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default statusKoreksiPage