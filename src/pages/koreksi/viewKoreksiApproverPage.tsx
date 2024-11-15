import { useState } from 'react';
import ViewKoreksiById from '../../components/koreksi/viewKoreksiById'
import { useParams, useNavigate } from 'react-router-dom'
import {getDataKoreksiById, actionApprover } from '../../features/koreksi/koreksi';
import { getMessageShow } from "../../features/messageShow";

const ViewKoreksiApprover = () => {
  const {id, code} = useParams();
  const navigate = useNavigate();

  const {datas} = getDataKoreksiById({id});

  const {clickAction, message} = actionApprover(id);

  const clickBack = () => {
    navigate(`/koreksi/approver/${code}`);
  }

  //message
  const messageShow = getMessageShow(message);

  return (
    <div>
      {messageShow}
      <ViewKoreksiById 
        datas={datas}
        clickBack={clickBack}
        isOpen={true}
        clickAction={clickAction}
      />
    </div>
  )
}

export default ViewKoreksiApprover