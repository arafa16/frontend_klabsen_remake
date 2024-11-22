import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import GeneralReportKoreksi from '../../components/koreksi/generalReportKoreksi';
import KoreksiTable from '../../components/koreksi/koreksiTable';

import { getMeAuth } from '../../features/auth/meAuth';
import { getDataKoreksiTableByApprover, getGeneralDataApprover} from '../../features/koreksi/koreksi';

const koreksiApproverPage = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get("code")

    useEffect(()=>{
        if(code !== undefined){
            set_status_code(code)
        }
    },[code])

    //get data auth
    const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

    // get data table
    const {datas, page, limit, allPage, status_code, set_status_code, nextPage, prevPage} = getDataKoreksiTableByApprover({dataMe});
    
    //get general data
    const {datas : dataGeneral} = getGeneralDataApprover({dataMe})

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
                    linkView={'/koreksi/view_approver'}
                    linkCreate={'#'}
                    status_code={status_code}
                />
            </div>
        </div>
    )
}

export default koreksiApproverPage