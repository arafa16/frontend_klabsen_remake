import { useEffect, useState, useRef } from "react";
import logoWhite from "../../assets/images/logo/logo_kopkarla_white.png";
import logoColor from "../../assets/images/logo/logo_kopkarla_color.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import { useNavigate, useParams } from "react-router-dom";

import { FormInput } from "../../base-components/Form";
import LoadingIcon from "../../base-components/LoadingIcon";
import Button from "../../base-components/Button";
import { 
  // getSubmitResetPassword, 
  getVerifyToken 
} from "../../features/auth/resetPassword";
import { getMessageShow } from "../../features/messageShow";
import Alert from "../../base-components/Alert";
import Lucide from "../../base-components/Lucide";

const ResetPassword = () => {
  const {token} = useParams();
  const [message, setMessage] = useState<any>(null)

  const navigate = useNavigate();
  
  const {dataResult, message:messageVerify, error, isLoading:isLoadingVerify} = getVerifyToken({token})

  // const {submitResetPassword, password, setPassword, confPassword, setConfPassword, message:messageReset, successReset, isLoading:isLoadingReset} = getSubmitResetPassword({token})

  useEffect(()=>{
    setMessage(messageVerify)
  },[messageVerify])

  useEffect(()=>{
    setMessage(messageReset)
  },[messageReset])

  const messageShow = getMessageShow(message)

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        {messageShow}
        <form onSubmit={submitResetPassword}>
          <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
              <div className="w-96 intro-y">
              <img
                className="w-24 mx-auto hidden lg:flex"
                alt="Kopkarla"
                src={logoWhite}
              />
              <img
                className="w-24 mx-auto flex lg:hidden"
                alt="Kopkarla"
                src={logoColor}
              />
              <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                  
                  {error ? 
                    <div>
                      <Alert variant="danger" className="flex items-center mb-2">
                              <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />
                              {messageVerify && "token expired or something wrong, send email reset again."}
                      </Alert>
                    </div> 
                  : 
                    <div></div>
                  }
                  <FormInput
                      type="email"
                      className="block px-4 py-3"
                      placeholder="Email"
                      name='email'
                      disabled
                      value={dataResult !== null ? dataResult.email : ''}
                  />
                  <FormInput
                      type="password"
                      className={`${error ? 'block' : ' '} px-4 py-3 mt-4`}
                      placeholder="Password"
                      name='password'
                      required
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                  />
                  <FormInput
                      type="password"
                      className="block px-4 py-3 mt-4"
                      placeholder="Confirmation Password"
                      name='confPassword'
                      required
                      value={confPassword}
                      onChange={(e)=>setConfPassword(e.target.value)}
                  />
                  <div className="flex justify-end mt-4 text-xs text-slate-500 sm:text-sm">
                  <p onClick={()=>navigate('/login')} className='cursor-pointer hover:text-blue-500'>Back to login ?</p>
                  </div>
                  <div className="mt-5 text-center xl:mt-8 xl:text-left">                    
                      <Button 
                          variant="primary" 
                          className={`${error ? 'hidden' : ' '} w-full xl:mr-3 mb-2`}
                          type='submit'
                          >
                          {isLoadingReset 
                          ? 
                          <LoadingIcon icon="tail-spin" color='white' className="w-4 h-4" />
                          :
                          "Reset Password"
                          }
                      </Button>
                      <Button 
                          type='button'
                          variant="outline-secondary" 
                          className={`${error ? 'hidden' : ' '} w-full xl:mr-3`}
                          onClick={()=>navigate('/register')}
                          >
                          Registration
                      </Button>
                  </div>
              </div>
              </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
