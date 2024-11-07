import logoWhite from "../../assets/images/logo/logo_kopkarla_white.png";
import logoColor from "../../assets/images/logo/logo_kopkarla_color.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import { FormInput } from "../../base-components/Form";

import Button from "../../base-components/Button";
import LoadingIcon from "../../base-components/LoadingIcon";
import { getForgotPassword } from "../../features/auth/resetPassword";
import { getMessageShow } from "../../features/messageShow";
import { useNavigate } from "react-router-dom";

const forgotPassword = () => {

  const navigate = useNavigate();

  const {email, setEmail, message, isLoadingReset, submitForgotPassword} = getForgotPassword();

  //message
  const messageShow = getMessageShow(message);

  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        {messageShow}
        <form onSubmit={submitForgotPassword}>
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
                <FormInput
                    type="email"
                    className="block px-4 py-3"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <div className="flex justify-end mt-4 text-xs text-slate-500 sm:text-sm">
                <p onClick={()=>navigate('/login')} className='cursor-pointer hover:text-blue-500'>Back to login ?</p>
                </div>
                <div className="mt-5 text-center xl:mt-8 xl:text-left">                    
                    {isLoadingReset 
                        ? 
                        <div className='h-6'>
                            <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                        </div>
                        :
                        <Button 
                            variant="primary" 
                            className="w-full xl:mr-3"
                            type='submit'
                            >
                            Send Email
                        </Button>
                    }
                </div>
            </div>
            </div>
        </div>
        </form>
      </div>
    </>
  );
}

export default forgotPassword;
