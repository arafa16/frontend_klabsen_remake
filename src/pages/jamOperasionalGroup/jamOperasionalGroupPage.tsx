import Table4 from '../../components/tableTemplate/table4';
import { getDataJamOperasionalGroupTable } from '../../features/jamOperasionalGroup/jamOperasionalGroup';

const jamOperasionalGroupPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataJamOperasionalGroupTable();

    return (
        <div className='w-full'>
            <Table4
                datas={dataResult}
                linkView="/jamOperasionalGroup/edit"
                linkCreate="/jamOperasionalGroup/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default jamOperasionalGroupPage