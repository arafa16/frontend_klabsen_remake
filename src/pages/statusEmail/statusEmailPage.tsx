import Table1 from '../../components/tableTemplate/table1';
import { getDataStatusEmailTable } from '../../features/statusEmail/statusEmail';

const statusEmailPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataStatusEmailTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/statusEmail/edit"
                linkCreate="/statusEmail/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default statusEmailPage