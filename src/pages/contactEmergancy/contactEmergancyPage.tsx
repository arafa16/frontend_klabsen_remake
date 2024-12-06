import Table1 from '../../components/tableTemplate/table1';
import { getDataContactTable } from '../../features/contact/contact';
const contactEmergancyPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataContactTable();

    return (
        <div className='w-full'>
            <Table1
                datas={dataResult}
                linkView="/contact/edit"
                linkCreate="/contact/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default contactEmergancyPage