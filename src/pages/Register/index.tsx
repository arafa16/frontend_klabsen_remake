import logoUrl from "../../assets/images/logo.svg";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput, FormCheck } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            <img
              className="w-16 mx-auto"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            />
            <div className="text-2xl font-medium text-center text-white dark:text-slate-300 mt-14">
              Register a New Account
            </div>
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="First Name"
              />
              <FormInput
                type="text"
                className="block px-4 py-3 mt-4"
                placeholder="Last Name"
              />
              <FormInput
                type="text"
                className="block px-4 py-3 mt-4"
                placeholder="Email"
              />
              <FormInput
                type="password"
                className="block px-4 py-3 mt-4"
                placeholder="Password"
              />
              <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-success"></div>
                <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
              </div>
              <a
                href=""
                className="block mt-2 text-xs text-slate-500 sm:text-sm"
              >
                What is a secure password?
              </a>
              <FormInput
                type="text"
                className="block px-4 py-3 mt-4"
                placeholder="Password Confirmation"
              />
              <div className="flex items-center mt-4 text-xs text-slate-500 sm:text-sm">
                <FormCheck.Input
                  id="remember-me"
                  type="checkbox"
                  className="mr-2 border"
                />
                <label
                  className="cursor-pointer select-none"
                  htmlFor="remember-me"
                >
                  I agree to the Envato
                </label>
                <a className="ml-1 text-primary dark:text-slate-200" href="">
                  Privacy Policy
                </a>
                .
              </div>
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button variant="primary" className="w-full xl:mr-3">
                  Register
                </Button>
                <Button variant="outline-secondary" className="w-full mt-3">
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
