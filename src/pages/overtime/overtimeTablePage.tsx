import React from 'react'
import OvertimeTable from '../../components/tableTemplate/overtimeTable'
import { getDataOvertimeTaskTable } from '../../features/overtime/overtimeTask';

const overtimeUserTablePage = () => {

  const {dataResult, nextPage, prevPage, page, allPage} = getDataOvertimeTaskTable();

  return (
    <div>
        <OvertimeTable 
          datas={dataResult}
          linkView="/overtime/datas"
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