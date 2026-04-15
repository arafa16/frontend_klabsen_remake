import logoWhite from "../../assets/images/logo/logo_kopkarla_white.png";
import logoColor from "../../assets/images/logo/logo_kopkarla_color.png";
import Button from "../../base-components/Button";
import { FormInput} from "../../base-components/Form";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";

import { useNavigate } from "react-router-dom";
import { getMeAuthCheck } from "../../features/auth/meAuthCheck";
import LoadingIcon from "../../base-components/LoadingIcon";
import { getLoginAuth } from "../../features/auth/auth";
import { getMessageShow } from "../../features/messageShow";

function Main() {
  const navigate = useNavigate();

  //login proses
  const {email, setEmail, password, setPassword, message:messageLogin, isLoadingLogin, submitLogin} = getLoginAuth();
  
  //message
  const messageShow = getMessageShow(messageLogin);

  //check data auth
  const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuthCheck();

  return (
    <>
      {messageShow}
      <div className="container">
      <DarkModeSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20 text-xs">
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
            <form onSubmit={submitLogin}>
              <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                <FormInput
                  type="email"
                  className="block px-4 py-3"
                  formInputSize="sm"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <FormInput
                  type="password"
                  className="block px-4 py-3 mt-4"
                  formInputSize="sm"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <div className="flex mt-8 text-slate-500">
                  <p 
                    className="w-full flex justify-end hover:cursor-pointer"
                    onClick={()=>navigate('/forgotPassword')}
                    >
                      Forgot Password?
                  </p>
                </div>
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                  <Button type="submit" variant="primary" className="w-full xl:mr-3">
                    {isLoadingLogin ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : 'Login'}
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    className="w-full mt-3"
                    type="button"
                    onClick={()=>navigate('/register')}
                    >
                    Sign up
                  </Button>
                </div>
                <div className="mt-10 flex justify-center text-gray-400">
                  <p>Created by Ara Fa Adri</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
