import { getDataPeriodeKerjaTable } from '../../features/periodeKerja/periodeKerja';
import Table3 from '../../components/tableTemplate/table3';
const periodeKerjaPage = () => {

    const {dataResult, limit, setLimit, nextPage, prevPage, page, allPage} = getDataPeriodeKerjaTable();

    return (
        <div className='w-full'>
            <Table3
                datas={dataResult}
                linkView="/periodeKerja/edit"
                linkCreate="/periodeKerja/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
                limit={limit}
                setLimit={setLimit}
            />
        </div>
    )
}

export default periodeKerjaPage