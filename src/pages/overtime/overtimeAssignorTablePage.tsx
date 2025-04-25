import React from 'react'
import OvertimeTable from '../../components/tableTemplate/overtimeTable'
import { getDataOvertimeTaskTableByAssignor } from '../../features/overtime/overtimeTask';

const overtimeUserTablePage = () => {

  const {dataResult, nextPage, prevPage, page, allPage} = getDataOvertimeTaskTableByAssignor();

  return (
    <div>
        <OvertimeTable 
          datas={dataResult}
          linkView="/overtime/data"
          linkCreate="/overtime/create"
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          allPage={allPage}
        />
    </div>
  )
}

export default overtimeUserTablePage