import { Transition } from "react-transition-group";
import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  createRef,
  useRef,
} from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useCallbackState from "../../utils/callback-state";
import { selectSideMenu } from "../../stores/sideMenuSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { FormattedMenu, linkTo, nestedMenu, enter, leave } from "./side-menu";
import Lucide from "../../base-components/Lucide";
import logoUrl from "../../assets/images/logo/logo_kopkarla_white.png";
import logoDarkUrl from "../../assets/images/logo/logo_kopkarla_color.png";
import clsx from "clsx";
import TopBar from "../../components/TopBar";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import SimpleBar from "simplebar";

import { getMeAuth } from "../../features/auth/meAuth";
import { getLogoutAuth } from "../../features/auth/logoutAuth";
import LoadingIcon from "../../base-components/LoadingIcon";

function Main() {
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState<
    Array<FormattedMenu | string>
  >([]);
  const sideMenuStore = useAppSelector(selectSideMenu);
  const sideMenu = () => nestedMenu(sideMenuStore, location);
  const darkMode = useAppSelector(selectDarkMode);
  const [privilege, setPrivilege] = useState<any>([])

  //get data auth
  const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

  useEffect(()=>{
    setPrivilege(dataMe && dataMe.privilege);
  },[dataMe])

  //logout
  const {data: dataLogout, loading:loadingLogout, message:messageLogout, handleLogout} = getLogoutAuth();

  useEffect(() => {
    setFormattedMenu(sideMenu());
  }, [sideMenuStore, location.pathname]);

  const [simpleMenu, setSimpleMenu] = useCallbackState({
    active: true,
    hover: false,
    wrapper: true,
  });
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollableRef = createRef<HTMLDivElement>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Set active/inactive simple menu
  const toggleSimpleMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    if (simpleMenu.active) {
      setSimpleMenu(
        {
          ...simpleMenu,
          hover: true,
        },
        (simpleMenu) => {
          if (wrapperRef.current) {
            wrapperRef.current.animate(
              {
                marginLeft: "270px",
              },
              {
                duration: 200,
              }
            ).onfinish = function () {
              if (wrapperRef.current) {
                wrapperRef.current.style.marginLeft = "270px";
              }
              setSimpleMenu(
                {
                  ...simpleMenu,
                  hover: false,
                  active: false,
                  wrapper: false,
                },
                () => {
                  if (wrapperRef.current) {
                    wrapperRef.current.removeAttribute("style");
                  }
                }
              );
            };
          }
        }
      );
    } else {
      setSimpleMenu(
        {
          ...simpleMenu,
          active: true,
          wrapper: true,
        },
        () => {
          if (wrapperRef.current) {
            wrapperRef.current.style.marginLeft = "270px";
            wrapperRef.current.animate(
              {
                marginLeft: "112px",
              },
              {
                duration: 200,
              }
            ).onfinish = function () {
              if (wrapperRef.current) {
                wrapperRef.current.removeAttribute("style");
              }
            };
          }
        }
      );
    }
  };

  // Set active/inactive mobile menu
  const toggleMobileMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    if (scrollableRef.current) {
      new SimpleBar(scrollableRef.current);
    }
    setFormattedMenu(sideMenu());
  }, [sideMenuStore, location.pathname]);

  return (
    <>
    <div className={`${loadingMe === false ? 'hidden' : ''} flex justify-center items-center w-full h-screen`}>
      <LoadingIcon icon="circles" className={`w-10 h-10`} color="white" />
    </div>
    <div className="flex h-screen xl:pl-5 xl:py-5">
      <DarkModeSwitcher />
      {/* BEGIN: Side Menu */}
      <nav
        className={clsx([
          {"hidden" : loadingMe === true},
          "absolute z-[52] -ml-[100%] xl:ml-0 transition-[width,margin-left] w-[270px] h-full flex flex-col pl-6 pr-2 overflow-hidden duration-300 ease-in-out xl:rounded-l-xl",
          "xl:before:visible before:opacity-0 xl:before:opacity-100 before:z-[-2] xl:before:z-auto before:bg-black/60 xl:before:bg-transparent before:transition-opacity xl:before:transition-none before:duration-300 before:ease-in-out before:content-[''] before:fixed xl:before:absolute before:inset-0 before:blur-md before:bg-cover before:grayscale before:xl:bg-[url('../../assets/images/backgrounds/bg-main.jpg')] before:bg-no-repeat before:-m-5",
          "after:w-full xl:after:w-auto after:h-screen xl:after:h-auto after:dark:bg-darkmode-800 xl:after:dark:bg-primary/50 after:content-[''] after:absolute after:inset-0 after:opacity-100 xl:after:opacity-90 after:bg-slate-50 xl:after:bg-primary/50 after:xl:bg-gradient-to-b after:from-slate-50/90 after:via-white/70 after:to-white/90 after:dark:from-darkmode-800/90 after:dark:via-darkmode-700/60 after:dark:to-darkmode-700/80",
          {
            "ml-0": mobileMenu,
            "before:invisible before:opacity-0": !mobileMenu,
            "before:visible before:opacity-100": mobileMenu,
            "xl:relative": !simpleMenu.active,
            "xl:w-[112px] xl:z-[52] xl:absolute xl:h-auto xl:inset-y-0 xl:my-5":
              simpleMenu.active,
            hover: simpleMenu.hover,
            "hover:w-[270px] hover:from-slate-50 hover:via-slate-50/80 hover:to-slate-50/90 hover:dark:from-darkmode-700 hover:dark:via-darkmode-700/80 hover:dark:to-darkmode-700/90 hover:shadow-[0_3px_15px_rgb(0_0_0_/_7%)]":
              simpleMenu.active,
            "[&.hover]:w-[270px] [&.hover]:from-slate-50 [&.hover]:via-slate-50/80 [&.hover]:to-slate-50/90 [&.hover]:dark:from-darkmode-700 [&.hover]:dark:via-darkmode-700/80 [&.hover]:dark:to-darkmode-700/90 [&.hover]:shadow-[0_3px_15px_rgb(0_0_0_/_7%)]":
              simpleMenu.active,
            "[&:hover_[data-menu-title]]:flex": simpleMenu.active,
            "[&.hover_[data-menu-title]]:flex": simpleMenu.active,
            "[&:hover_[data-menu-divider]]:text-slate-600 [&:hover_[data-menu-divider]]:dark:text-slate-500":
              simpleMenu.active,
            "[&.hover_[data-menu-divider]]:text-slate-600 [&.hover_[data-menu-divider]]:dark:text-slate-500":
              simpleMenu.active,
            "[&:hover_[data-menu-divider]:before]:text-transparent":
              simpleMenu.active,
            "[&.hover_[data-menu-divider]:before]:text-transparent":
              simpleMenu.active,
            "[&:hover_[data-logo]]:ml-0": simpleMenu.active,
            "[&.hover_[data-logo]]:ml-0": simpleMenu.active,
            "[&:hover_[data-logo-text]]:opacity-100": simpleMenu.active,
            "[&.hover_[data-logo-text]]:opacity-100": simpleMenu.active,
            "[&:hover_[data-toggler]]:opacity-100": simpleMenu.active,
            "[&.hover_[data-toggler]]:opacity-100": simpleMenu.active,
          },
        ])}
      >
        <div className="pt-4 mb-4">
          <div className={clsx(["flex items-center h-[33px]"])}>
            <Link to="/" className="flex items-center intro-x">
              <img
                alt="Rocketman Tailwind HTML Admin Template"
                className={clsx([
                  "w-[1.6rem]",
                  simpleMenu.active &&
                    "xl:ml-5 transition-all duration-200 ease-in-out",
                ])}
                src={darkMode ? logoUrl : logoDarkUrl}
                data-logo
              />
              <span
                data-logo-text
                className={clsx([
                  "pt-0.5 text-lg ml-2.5",
                  simpleMenu.active &&
                    "xl:opacity-0 transition-opacity duration-200 ease-in-out",
                ])}
              >
                Kopkarla
              </span>
            </Link>
            <a
              href="#"
              onClick={toggleSimpleMenu}
              className={clsx([
                "hidden pr-5 ml-auto text-primary dark:text-slate-500 transition-all duration-300 ease-in-out z-[5] xl:block text-opacity-70 hover:text-opacity-100",
                simpleMenu.active &&
                  "opacity-0 transition-opacity duration-200 ease-in-out",
              ])}
              data-toggler
            >
              <Lucide
                icon="ArrowLeftCircle"
                className={clsx([
                  "w-5 h-5 transition-transform duration-300 ease-in-out",
                  simpleMenu.active && "transform rotate-180",
                ])}
              />
            </a>
            <a
              href="#"
              onClick={toggleMobileMenu}
              className="pr-5 ml-auto text-primary dark:text-slate-500 transition-all duration-300 ease-in-out mobile-menu-toggler z-[5] xl:hidden text-opacity-70 hover:text-opacity-100"
            >
              <Lucide
                icon="XCircle"
                className="w-5 h-5 transition-transform duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div
          ref={scrollableRef}
          className={clsx([
            "relative text-xs z-10 -ml-5 pl-5 pt-5 pb-5 h-full overflow-y-auto [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent",
            "[&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:pt-[3.1rem] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-black/10 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:dark:bg-white/[0.15]",
          ])}
        >
          <ul className="pr-5 overflow-x-hidden">
            {/* BEGIN: First Child */}
            {formattedMenu.map((menu, menuKey) =>
              typeof menu === "string" ? (
                <li
                  className={clsx([
                    "mb-4 w-full h-5 pl-5  relative [&:not(:first-child)]:mt-6",
                    !simpleMenu.active && "text-slate-600 dark:text-slate-500",
                    simpleMenu.active &&
                      "text-slate-600 dark:text-slate-500 xl:text-transparent whitespace-nowrap",
                    simpleMenu.active &&
                      "xl:before:content-['...'] before:absolute before:inset-0 before:text-slate-500/70 before:text-2xl before:w-full before:text-center before:-mt-3.5",

                    // Animation
                    `opacity-0 animate-[0.4s_ease-in-out_0.1s_intro-divider] animate-fill-mode-forwards animate-delay-${
                      (menuKey + 1) * 10
                    }`,
                  ])}
                  data-menu-divider
                  key={menu + menuKey}
                >
                  {menu}
                </li>
              ) : (
                <li key={menuKey}>
                  <Menu
                    className={clsx({
                      // Animation
                      [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                        (menuKey + 1) * 10
                      }`]: !menu.active,
                    })}
                    menu={menu}
                    privilege={privilege}
                    simpleMenu={simpleMenu}
                    formattedMenuState={[formattedMenu, setFormattedMenu]}
                    level="first"
                  ></Menu>
                  {/* BEGIN: Second Child */}
                  {menu.subMenu && (
                    <Transition
                      in={menu.activeDropdown}
                      onEnter={enter}
                      onExit={leave}
                      timeout={300}
                    >
                      <ul
                        className={clsx([
                          "bg-white/[0.06] rounded-xl relative dark:bg-transparent",
                          "before:content-[''] before:block before:inset-0 before:bg-slate-800/[0.06] before:rounded-xl before:absolute before:z-[-1] before:dark:bg-darkmode-700/60",
                          {
                            hidden: !menu.activeDropdown,
                          },
                          { block: menu.activeDropdown },
                        ])}
                      >
                        {menu.subMenu.map((subMenu, subMenuKey) => (
                          <li key={subMenuKey}>
                            <Menu
                              className={clsx({
                                // Animation
                                [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                  (subMenuKey + 1) * 10
                                }`]: !subMenu.active,
                              })}
                              menu={subMenu}
                              privilege={privilege}
                              simpleMenu={simpleMenu}
                              formattedMenuState={[
                                formattedMenu,
                                setFormattedMenu,
                              ]}
                              level="second"
                            ></Menu>
                            {/* BEGIN: Third Child */}
                            {subMenu.subMenu && (
                              <Transition
                                in={subMenu.activeDropdown}
                                onEnter={enter}
                                onExit={leave}
                                timeout={300}
                              >
                                <ul
                                  className={clsx([
                                    "bg-white/[0.06] rounded-xl relative dark:bg-transparent",
                                    "before:content-[''] before:block before:inset-0 before:bg-slate-800/[0.06] before:rounded-xl before:absolute before:z-[-1] before:dark:bg-darkmode-700/60",
                                    {
                                      hidden: !subMenu.activeDropdown,
                                    },
                                    {
                                      block: subMenu.activeDropdown,
                                    },
                                  ])}
                                >
                                  {subMenu.subMenu.map(
                                    (lastSubMenu, lastSubMenuKey) => (
                                      <li key={lastSubMenuKey}>
                                        <Menu
                                          className={clsx({
                                            // Animation
                                            [`opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-${
                                              (lastSubMenuKey + 1) * 10
                                            }`]: !lastSubMenu.active,
                                          })}
                                          menu={lastSubMenu}
                                          privilege={privilege}
                                          simpleMenu={simpleMenu}
                                          formattedMenuState={[
                                            formattedMenu,
                                            setFormattedMenu,
                                          ]}
                                          level="third"
                                        ></Menu>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </Transition>
                            )}
                            {/* END: Third Child */}
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                  {/* END: Second Child */}
                </li>
              )
            )}
            {/* END: First Child */}
          </ul>
        </div>
      </nav>
      {/* END: Side Menu */}
      {/* BEGIN: Content */}
      <div
        ref={wrapperRef}
        className={clsx([
          "min-w-0 relative flex-1",
          "before:content-[''] before:hidden before:xl:block before:inset-0 before:mr-5 before:absolute before:bg-gradient-to-b before:from-slate-100/90 before:to-white/80 before:backdrop-blur-md before:rounded-r-xl before:dark:from-darkmode-800/80 before:dark:to-darkmode-700/90",
          "after:content-[''] after:shadow-[0_3px_15px_rgb(0_0_0_/_7%)] after:hidden after:xl:block after:bg-slate-50/[0.70] after:inset-0 after:absolute after:rounded-xl after:mr-5 after:dark:bg-darkmode-700/[0.9]",
          {
            "xl:ml-[112px] px-3 sm:px-4 xl:pl-0": simpleMenu.wrapper,
          },
        ])}
      >
        <div
          className={clsx([
            "relative z-10 h-full max-w-full px-3 pb-5 overflow-x-hidden xl:max-w-none sm:px-4 xl:pl-0",
            { "xl:pr-5": !simpleMenu.wrapper },
            { "xl:pr-1": simpleMenu.wrapper },
          ])}
        >
          <TopBar 
            data={dataMe} 
            logout={handleLogout}
            toggleMobileMenu={toggleMobileMenu}
          />
          <div className="xl:px-6 mt-2.5">
            <Outlet />
          </div>
        </div>
      </div>
      {/* END: Content */}
    </div>
    </>
    
  );
}

function Menu(props: {
  className?: string;
  simpleMenu: {
    active: boolean;
    hover: boolean;
    wrapper: boolean;
  };
  menu: FormattedMenu;
  privilege?:any;
  formattedMenuState: [
    (FormattedMenu | string)[],
    Dispatch<SetStateAction<(FormattedMenu | string)[]>>
  ];
  level: "first" | "second" | "third";
}) {
  const navigate = useNavigate();
  const [formattedMenu, setFormattedMenu] = props.formattedMenuState;

  const nameColom : any = props.menu.code;

  return (
    <a
      href={props.menu.subMenu ? "#" : props.menu.pathname}
      className={clsx([
        `${props.privilege && props.privilege[nameColom] ? '' : 'hidden'}`,
        "h-[50px] flex items-center pl-5 mb-1 relative dark:text-slate-300",
        {
          "bg-primary text-white rounded-xl dark:bg-transparent":
            props.menu.active && props.level == "first",
        },
        {
          "before:content-[''] before:block before:inset-0 before:bg-white/[0.08] before:rounded-lg before:absolute before:border-b-[3px] before:border-solid before:border-black/10 before:dark:border-black/10 before:dark:bg-darkmode-700":
            props.menu.active && props.level == "first",
        },
        { "text-slate-700 dark:text-slate-400": !props.menu.active },
        {
          "hover:bg-slate-800/10 hover:rounded-xl hover:dark:bg-transparent hover:before:block hover:before:inset-0 hover:before:z-[-1] hover:before:bg-white/[0.1] hover:before:rounded-xl hover:before:absolute hover:before:dark:bg-darkmode-700/60":
            !props.menu.active &&
            !props.menu.activeDropdown &&
            props.level == "first",
        },
        props.className,
      ])}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        linkTo(props.menu, navigate);
        setFormattedMenu([...formattedMenu]);
      }}
    >
      <div
        className={clsx({
          "z-10 dark:text-slate-300":
            props.menu.active && props.level == "first",
        })}
      >
        <Lucide icon={props.menu.icon} className="w-4 h-4 -mt-0.5" />
      </div>
      <div
        className={clsx([
          "w-full ml-3 flex items-center",
          {
            "font-medium z-10 dark:text-slate-300":
              props.menu.active && props.level == "first",
          },
          { "font-medium": props.menu.active },
          { "xl:hidden whitespace-nowrap": props.simpleMenu.active },
        ])}
        data-menu-title
      >
        {props.menu.title}
        {props.menu.subMenu && (
          <div
            className={clsx([
              "transition ease-in duration-100 ml-auto mr-4",
              { "transform rotate-180": props.menu.activeDropdown },
            ])}
          >
            <Lucide icon="ChevronDown" className="w-4 h-4" />
          </div>
        )}
      </div>
    </a>
  );
}

export default Main;
