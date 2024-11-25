import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { getUsers, getUsersTable, resetUsers } from "../../stores/features/userSlice";

import GeneralReportEmploye from '../../components/employee/generalReportEmploye';
import EmployeTable from '../../components/employee/employeTable';
import { 
  getDataUserTable, 
  getCountDataUser 
} from '../../features/user/user';

const absenCheckByUser = () => {

  const {
    datas,
    page, setPage,
    limit,setLimit,
    search, setSearch,
    allPage, 
    status_code, set_status_code, 
    nextPage, 
    prevPage
  } = getDataUserTable();

  const {datas: dataUsers} = getCountDataUser();

  const clickStatus = (code:any) => {
    set_status_code(code)
  }

  return (
    <div className="grid grid-cols-12 gap-5 mt-5 text-xs">
      <div className="col-span-12 xl:col-span-12">
        <GeneralReportEmploye 
          datas={dataUsers}
          clickStatus={clickStatus}
        />
      </div>
      <div className="col-span-12 xl:col-span-12 mb-12">
        <EmployeTable
          limit={limit}
          setLimit={setLimit}
          datas={datas}
          linkCreate='/createEmploye'
          linkView='/absen/user'
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

export default absenCheckByUser