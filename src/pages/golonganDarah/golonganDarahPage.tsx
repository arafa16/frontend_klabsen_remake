import Table1 from '../../components/tableTemplate/table1';
import { getDataGolonganDarahTable } from '../../features/golonganDarah/golonganDarah';

const golonganDarahPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataGolonganDarahTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/golonganDarah/edit"
                linkCreate="/golonganDarah/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default golonganDarahPage