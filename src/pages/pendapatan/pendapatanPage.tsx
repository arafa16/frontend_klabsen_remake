import { FormInput} from '../../base-components/Form';
import PendapatanTable from '../../components/pendapatan/pendapatanTable';

import { getMeAuth } from "../../features/auth/meAuth";
import { getDataPendapatansTableById } from '../../features/pendapatan/pendapatan';

const pendapatanPage = () => {
  // const [message, setMessage] = useState<any>(null)

  //get data auth
  const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

  //get data pendapatan by user
  const {
    id, setId, 
    search, setSearch, 
    dataResult:dataPendapatan, setDataResult, 
    limit, setLimit, 
    page, setPage, 
    nextPage, prevPage, 
    allPage} = getDataPendapatansTableById({me:dataMe, type:1});

  return (
    <div>
      <div className='grid grid-cols-12 grid-rows-2 mt-5'>
        <div className='col-start-9 col-span-4 row-start-2 flex gap-4'>
          <FormInput
              formInputSize="sm"
              id="search"
              type="text"
              name='search'
              placeholder='search by month'
              className='w-full'
              value={search}
              onChange={(e : any)=>setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <PendapatanTable
            datas={dataPendapatan} 
            page={page}
            limit={limit}
            nextPage={nextPage}
            prevPage={prevPage}
            allPage={allPage}
            link={'/pendapatan/slip/'}
          />
        </div>
      </div>
    </div>
  )
}

export default pendapatanPage