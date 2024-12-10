import Table6 from '../../components/tableTemplate/table6';
import { getDataTipeAbsenTable } from '../../features/tipeAbsen/tipeAbsen';

const tipeAbsenPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataTipeAbsenTable();

    return (
        <div className='w-full'>
            <Table6
                datas={dataResult}
                linkView="/tipeAbsen/edit"
                linkCreate="/tipeAbsen/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default tipeAbsenPage