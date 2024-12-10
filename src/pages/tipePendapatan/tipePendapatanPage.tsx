import Table1 from '../../components/tableTemplate/table1';
import { getDataTipePendapatanTable } from '../../features/tipePendapatan/tipePendapatan';

const tipePendapatanPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataTipePendapatanTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/tipePendapatan/edit"
                linkCreate="/tipePendapatan/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default tipePendapatanPage