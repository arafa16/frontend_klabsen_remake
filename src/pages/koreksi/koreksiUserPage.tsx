import KoreksiTable from '../../components/koreksi/koreksiTable';
import GeneralReportKoreksi from '../../components/koreksi/generalReportKoreksi';

import { getMeAuth } from '../../features/auth/meAuth';
import { getDataKoreksiTableByUser, getGeneralDataUser } from '../../features/koreksi/koreksi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const koreksiUserPage = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const code = queryParameters.get("code")

  useEffect(()=>{
    // console.log(code, 'code paramssss');
    if(code !== null){
      set_status_code(code)
    }
  },[code])

  //get data auth
  const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

  // get data table
  const {datas, page, limit, allPage, status_code, set_status_code, nextPage, prevPage} = getDataKoreksiTableByUser({dataMe});

  //get general data
  const {datas : dataGeneral} = getGeneralDataUser({dataMe})

  const clickStatus = (code:any) => {
    set_status_code(code)
  }

  return (
    <div className='text-xs'>
        <div>
            <GeneralReportKoreksi 
                datas={dataGeneral}
                clickStatus={clickStatus}
            />
        </div>
        <div>
            <KoreksiTable
                datas={datas}
                page={page}
                limit={limit}
                nextPage={nextPage}
                prevPage={prevPage}
                allPage={allPage}
                linkView={'/koreksi/view'}
                linkCreate={'#'}
                status_code={status_code}
            />
        </div>
        
    </div>
  )
}

export default koreksiUserPage