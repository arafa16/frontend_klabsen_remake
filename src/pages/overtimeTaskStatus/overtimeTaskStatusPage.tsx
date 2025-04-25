import React from 'react'
import Table1 from '../../components/tableTemplate/table1';
import { getDataTable } from '../../features/overtimeTaskStatus/overtimeTaskstatus';

const overtimeTaskStatusPage = () => {
  
  const {dataResult, nextPage, prevPage, page, allPage} = getDataTable()

  console.log(dataResult, 'result');

  return (
    <div>
        <Table1
            datas={dataResult}
            linkView="/overtimeTaskStatus/edit"
            linkCreate="/overtimeTaskStatus/create"
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            allPage={allPage}
        />
    </div>
  )
}

export default overtimeTaskStatusPage