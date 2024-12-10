import Table1 from '../../components/tableTemplate/table1';
import { getDataJabatanTable } from '../../features/jabatan/jabatan';

const jabatanPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataJabatanTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/jabatan/edit"
                linkCreate="/jabatan/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default jabatanPage