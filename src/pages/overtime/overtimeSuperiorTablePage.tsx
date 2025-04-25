import React from 'react'
import OvertimeTable from '../../components/tableTemplate/overtimeTable'
import { getDataOvertimeTaskTableBySuperior } from '../../features/overtime/overtimeTask';

const overtimeUserTablePage = () => {

  const {dataResult, nextPage, prevPage, page, allPage} = getDataOvertimeTaskTableBySuperior();

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