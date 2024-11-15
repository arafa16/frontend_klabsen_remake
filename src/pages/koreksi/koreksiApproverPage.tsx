import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import GeneralReportKoreksi from '../../components/koreksi/generalReportKoreksi';
import KoreksiTable from '../../components/koreksi/koreksiTable';

import { getMeAuth } from '../../features/auth/meAuth';
import { getDataKoreksiTableByApprover, getGeneralDataApprover} from '../../features/koreksi/koreksi';

const koreksiApproverPage = () => {
    
    const {code : codeParams} = useParams();

    useEffect(()=>{
        if(codeParams !== undefined){
          setStatusCode(codeParams)
        }
    },[codeParams])

    //get data auth
    const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

    // get data table
    const {datas, page, limit, allPage, statusCode, setStatusCode, nextPage, prevPage} = getDataKoreksiTableByApprover({dataMe});
    
    //get general data
    const {datas : dataGeneral} = getGeneralDataApprover({dataMe})

    const clickStatus = (code:any) => {
        setStatusCode(code)
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
                    linkView={'/koreksi/approver'}
                    linkCreate={'/'}
                    statusCode={statusCode}
                />
            </div>
        </div>
    )
}

export default koreksiApproverPage