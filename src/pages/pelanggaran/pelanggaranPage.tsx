import Table1 from '../../components/tableTemplate/table1';
import { getDataPelanggaranTable } from '../../features/pelanggaran/pelanggaran';

const pelanggaranPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataPelanggaranTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/pelanggaran/edit"
                linkCreate="/pelanggaran/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default pelanggaranPage