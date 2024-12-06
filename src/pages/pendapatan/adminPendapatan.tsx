import React, { useEffect, useState, useRef } from 'react'
import PendapatanTableAdmin from '../../components/pendapatan/pendapatanTableAdmin';
import { getPendapatansTable } from '../../stores/features/pendapatanSlice'
import { useDispatch, useSelector } from 'react-redux'
// import FormUploadPendapatan from '../../components/Form/Pendapatan/FormUploadPendapatan'
import Button from '../../base-components/Button'
import { formUploadPendapatan } from '../../features/pendapatan/formUploadPendapatan';
// import Notification from "../../base-components/Notification";
// import { NotificationElement } from "../../base-components/Notification";
import { FormInput, FormLabel } from '../../base-components/Form'
import { useNavigate } from 'react-router-dom'
import { getDataPendapatansTable } from '../../features/pendapatan/pendapatan';

const AdminPendapatan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fromUpload, setFormUpload] = useState(false);
  const [msg, setMsg] = useState('');

  const {
    reload,
    search, setSearch,
    dataResult:dataPendapatan, setDataResult, 
    limit, setLimit, 
    page, setPage, 
    nextPage, prevPage, 
    allPage
  } = getDataPendapatansTable();

  const {from:formPendapatan, isView:isViewPendapatan, setIsView:setIsViewPendapatan, message:messagePendapatan} = formUploadPendapatan({reload});

const viewSlip = (data : any) => {
  if(data && data.tipe_pendapatan.code === '1'){
    navigate('/viewSlip/'+data.uuid);
  }
  else{
    navigate('/viewSlipBonus/'+data.uuid);
  }
}

  return (
    <div className='w-full'>
      {/* <Notification
        getRef={(el) => {
          NotificationRegister.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium normal-case">
          {msg}
        </div>
      </Notification> */}
      <div className='grid grid-cols-12 grid-rows-2 mt-5'>
        <div className='col-start-1 col-span-6 row-span-2'>
          {formPendapatan}
        </div>
        <div className='col-start-9 col-span-4 row-start-2 flex gap-4'>
          <FormInput
              formInputSize="sm"
              id="search"
              type="text"
              name='search'
              placeholder='search by name or nik'
              className='w-full'
              value={search}
              onChange={(e : any)=>setSearch(e.target.value)}
          />
          <Button
            variant="primary"
            size='sm'
            className='w-full'
            onClick={()=>setIsViewPendapatan(!isViewPendapatan)}
          >Upload Slip</Button>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <PendapatanTableAdmin 
            datas={dataPendapatan} 
            page={page}
            limit={limit}
            nextPage={nextPage}
            prevPage={prevPage}
            allPage={allPage}
            link1={'/pendapatan/slip/'}
            link2={'/pendapatan/bonus/'}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminPendapatan