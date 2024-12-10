import Table1 from '../../components/tableTemplate/table1';
import { getDataStatusPerkawinanTable } from '../../features/statusPerkawinan/statusPerkawinan';

const statusPerkawinanPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataStatusPerkawinanTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/statusPerkawinan/edit"
                linkCreate="/statusPerkawinan/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default statusPerkawinanPage