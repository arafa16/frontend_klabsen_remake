import { useState } from 'react';
import ViewKoreksiById from '../../components/koreksi/viewKoreksiById'
import { useParams, useNavigate } from 'react-router-dom'
import {getDataKoreksiById, actionApprover } from '../../features/koreksi/koreksi';
import { getMessageShow } from "../../features/messageShow";

const ViewKoreksiApprover = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search)
  const uuid = queryParameters.get("uuid")
  const code = queryParameters.get("code")

  const {datas} = getDataKoreksiById({uuid});

  const {clickAction, message} = actionApprover(uuid);

  const clickBack = () => {
    navigate(`/koreksi/approver?${new URLSearchParams({code:`${code}`})}`);
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