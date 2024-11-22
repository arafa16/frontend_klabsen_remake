import ViewKoreksiById from '../../components/koreksi/viewKoreksiById'
import { useNavigate } from 'react-router-dom'

import {getDataKoreksiById } from '../../features/koreksi/koreksi';

const ViewKoreksi = () => {
  const navigate = useNavigate();

  const queryParameters = new URLSearchParams(window.location.search)
  const uuid = queryParameters.get("uuid")
  const code = queryParameters.get("code")

  const {datas} = getDataKoreksiById({uuid});

  const clickBack = () => {
    navigate(`/koreksi/user?${new URLSearchParams({code:`${code}`})}`);
  }

  return (
    <div>
      <ViewKoreksiById 
        datas={datas}
        clickBack={clickBack}
        isOpen={false}
      />
    </div>
  )
}

export default ViewKoreksi