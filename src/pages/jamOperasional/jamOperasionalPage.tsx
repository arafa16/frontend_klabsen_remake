import { getDataJamOperasionalTable } from '../../features/jamOperasional/jamOperasional';
import Table2 from '../../components/tableTemplate/table2';
const jamOperasionalPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataJamOperasionalTable();

    return (
        <div className='w-full'>
            <Table2
                datas={dataResult}
                linkView="/jamOperasional/edit"
                linkCreate="/jamOperasional/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default jamOperasionalPage