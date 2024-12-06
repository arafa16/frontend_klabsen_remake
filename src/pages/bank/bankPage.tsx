import Table1 from '../../components/tableTemplate/table1';
import { getDataBankTable } from '../../features/bank/bank';

const bankPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataBankTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/bank/edit"
                linkCreate="/bank/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default bankPage