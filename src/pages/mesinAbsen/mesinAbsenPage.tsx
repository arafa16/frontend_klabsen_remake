import Table5 from '../../components/tableTemplate/table5';
import { getDataMesinAbsenTable } from '../../features/mesinAbsen/mesinAbsen';

const mesinAbsenPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataMesinAbsenTable();

    return (
        <div className='w-full'>
            <Table5
                datas={dataResult}
                linkView="/mesinAbsen/edit"
                linkCreate="/mesinAbsen/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default mesinAbsenPage