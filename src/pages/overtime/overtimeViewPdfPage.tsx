import React from 'react'
import TemplateOvertimeDownload from '../../components/overtime/templateOvertimeDownload'
import { getOvertimeTaskById } from '../../features/overtime/overtimeTask'
import { useParams } from 'react-router-dom';

const overtimeViewPdfPage = () => {
  const {id} = useParams();
  const {dataResult} = getOvertimeTaskById({id})

  const linkQRCode  = `${import.meta.env.VITE_REACT_APP_API_URL}/overtime/data/${id}`
  
  return (
    <div>
      <TemplateOvertimeDownload 
        view={true}
        download={false}
        data={dataResult}
        link={linkQRCode}
      />
    </div>
  )
}

export default overtimeViewPdfPage