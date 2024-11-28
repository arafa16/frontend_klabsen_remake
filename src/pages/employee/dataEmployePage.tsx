// import React, {useState, useEffect} from 'react'
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsers, resetUsers, downloadUsers} from "../../stores/features/userSlice";
// import { getUsersTable } from "../../stores/features/user2Slice";
// import FormImportUser from '../../components/Form/User/FormImportUser';
import Button from '../../base-components/Button';
// import axios from 'axios';

import GeneralReportEmploye from '../../components/employee/generalReportEmploye';
import EmployeTable from '../../components/employee/employeTable';
import { 
  getDataUserTable, 
  getCountDataUser
} from '../../features/user/user';
import { FormImportUser } from '../../features/employee/formImportUser';
import { exportUser } from '../../features/employee/user';
import LoadingIcon from '../../base-components/LoadingIcon'

const dataEmployePage = () => {

  const {
    datas,
    page, setPage,
    limit,setLimit,
    search, setSearch,
    allPage, 
    status_code, set_status_code, 
    nextPage, 
    prevPage,
    reload:reloadDataUserTable
  } = getDataUserTable();

  const {datas: dataUsers, reload} = getCountDataUser();

  const clickStatus = (code:any) => {
    set_status_code(code)
  }

  const {form:formImportUser, isView, setIsView} = FormImportUser({
    reloadDataUserTable,
    reload
  })

  const {downloadUser, isLoading} = exportUser();

  const clickDownload = () => {
    downloadUser({
      status_code,
      name:'donwload_user.xlsx'
    })
  }

  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-12 xl:col-span-12">
        <GeneralReportEmploye 
          datas={dataUsers}
          clickStatus={clickStatus}
        />
      </div>
      <div className="col-span-12 xl:col-span-6">
        {formImportUser}
      </div>
      <div className="col-span-12 xl:col-span-6 content-end mt-4">
          <div className='flex justify-end'>
            <div className='mx-2'>
              <Button
                  variant={!isView ? "primary" : "danger"}
                  size='sm'
                  onClick={()=>setIsView(!isView)}
                  >
                  {!isView ? 'Show Form Upload User' : 'Close Form Upload User'}
              </Button>
            </div>
            <div>
              <Button
                  variant={"primary"}
                  size='sm'
                  onClick={()=>clickDownload()}
                  >
                    {isLoading ?   
                      <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" /> 
                      : 
                      'Download User'
                    }
              </Button>
            </div>
          </div>
      </div>
      <div className="col-span-12 xl:col-span-12">
        <EmployeTable 
          datas={datas}
          limit={limit}
          setLimit={setLimit}
          linkCreate='/employee/create'
          linkView='/employee/data'
          page={page}
          allPage={allPage}
          nextPage={nextPage}
          prevPage={prevPage}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  )
}

export default dataEmployePage