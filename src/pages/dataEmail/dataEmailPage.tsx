import React from 'react'
import TableDataEmail from '../../components/tableTemplate/tableDataEmail';
import { getDataEmailsTable } from '../../features/email/dataEmail';

const dataEmailPage = () => {

  const {dataResult, nextPage, prevPage, page, allPage} = getDataEmailsTable();

  return (
    <div className='w-full'>
      <TableDataEmail
          datas={dataResult}
          linkView="/dataEmail/view"
          linkCreate="/dataEmail/create"
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          allPage={allPage}
      />
    </div>
  )
}

export default dataEmailPage