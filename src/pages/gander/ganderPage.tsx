import Table1 from '../../components/tableTemplate/table1';
import { getDataGanderTable } from '../../features/gander/gander';

const ganderPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataGanderTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/gander/edit"
                linkCreate="/gander/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default ganderPage