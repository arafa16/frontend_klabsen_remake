import React from 'react'
import Table1 from '../../components/tableTemplate/table1';
import { getDataTable } from '../../features/overtimeReportStatus/overtimeReportStatus';

const overtimeReportStatusPage = () => {
  
  const {dataResult, nextPage, prevPage, page, allPage} = getDataTable()

  console.log(dataResult, 'result');

  return (
    <div>
        <Table1
            datas={dataResult}
            linkView="/overtimeReportStatus/edit"
            linkCreate="/overtimeReportStatus/create"
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            allPage={allPage}
        />
    </div>
  )
}

export default overtimeReportStatusPage