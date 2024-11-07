import { useState } from "react";
import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { FormInput } from "../../base-components/Form";
import { Menu, Popover, Dialog } from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import _ from "lodash";
import clsx from "clsx";

function Main(props: { toggleMobileMenu: (event: React.MouseEvent) => void }) {
  const [searchResultModal, setSearchResultModal] = useState(false);

  // Show search result modal
  const showSearchResultModal = () => {
    setSearchResultModal(true);
  };

  // On press event (Ctrl+k)
  document.querySelectorAll("body")[0].onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.which == 75) {
      setSearchResultModal(true);
    }
  };

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div
        className={clsx([
          "h-[63px] z-[51] sticky top-[10px] xl:mx-[10px] flex items-center px-5  text-xs",
          "before:content-[''] before:absolute before:h-3 before:top-0 before:inset-x-0 before:-mt-3 before:z-[-1] before:bg-gradient-to-b before:from-slate-100/50 before:to-slate-100/[0.93] before:dark:from-darkmode-700/50 before:dark:to-darkmode-700/[0.93]",
          "after:content-[''] after:shadow-[0_3px_15px_rgb(0_0_0_/_7%)] after:absolute after:inset-0 after:bg-white after:border after:border-slate-200 after:rounded-xl after:dark:bg-darkmode-600 after:dark:border-darkmode-500",
        ])}
      >
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="hidden -intro-x xl:flex">
          <Breadcrumb.Link to="/">App</Breadcrumb.Link>
          <Breadcrumb.Link to="/">Administrator</Breadcrumb.Link>
          <Breadcrumb.Link to="/" active={true}>
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        {/* BEGIN: Mobile Menu */}
        <div className="mr-3 -intro-x xl:hidden sm:mr-6">
          <div
            className="cursor-pointer w-[38px] h-[38px] rounded-full border border-slate-200 flex items-center justify-center dark:border-white/20"
            onClick={props.toggleMobileMenu}
          >
            <Lucide
              icon="BarChart2"
              className="w-5 h-5 transform rotate-90 dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Search */}
        <div className="relative ml-auto intro-x sm:mx-auto">
          <div className="relative hidden sm:block">
            <FormInput
              onClick={showSearchResultModal}
              type="text"
              className="w-80 shadow-none rounded-full text-slate-200 border-transparent bg-slate-100 pl-3.5 pr-8 transition-[width] duration-300 ease-in-out placeholder:text-slate-400 focus:border-transparent dark:bg-darkmode-400/70"
              placeholder="Quick Search... (Ctrl+k)"
            />
            <Lucide
              icon="Search"
              className="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-400 dark:text-slate-500"
            />
          </div>
          <a className="relative text-white/70 sm:hidden" href="">
            <Lucide
              icon="Search"
              className="w-5 h-5 mr-5 dark:text-slate-500"
            />
          </a>
        </div>
        {/* END: Search */}
        {/* BEGIN: Search Result */}
        <Dialog
          size="lg"
          open={searchResultModal}
          onClose={() => {
            setSearchResultModal(false);
          }}
          className="flex items-center justify-center"
        >
          <Dialog.Panel className="p-0">
            <div className="relative border-b border-slate-200/60">
              <Lucide
                icon="Search"
                className="absolute inset-y-0 w-5 h-5 my-auto ml-4 text-slate-500"
              />
              <FormInput
                type="text"
                className="px-12 py-5 border-0 shadow-none focus:ring-0"
                placeholder="Quick Search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center h-6 px-2 my-auto mr-4 text-xs rounded-md bg-slate-200 text-slate-500">
                ESC
              </div>
            </div>
            <div className="p-5">
              <div className="mb-3 font-medium">Applications</div>
              <div className="mb-5">
                <a href="" className="flex items-center mt-3 first:mt-0">
                  <div className="flex items-center justify-center rounded-full w-7 h-7 bg-success/20 dark:bg-success/10 text-success">
                    <Lucide icon="Inbox" className="w-3.5 h-3.5" />
                  </div>
                  <div className="ml-3 truncate">Compose New Mail</div>
                  <div className="flex items-center justify-end w-48 ml-auto text-xs truncate text-slate-500">
                    <Lucide icon="Link" className="w-3.5 h-3.5 mr-2" /> Quick
                    Access
                  </div>
                </a>
                <a href="" className="flex items-center mt-3 first:mt-0">
                  <div className="flex items-center justify-center rounded-full w-7 h-7 bg-pending/10 text-pending">
                    <Lucide icon="Users" className="w-3.5 h-3.5" />
                  </div>
                  <div className="ml-3 truncate">Contacts</div>
                  <div className="flex items-center justify-end w-48 ml-auto text-xs truncate text-slate-500">
                    <Lucide icon="Link" className="w-3.5 h-3.5 mr-2" /> Quick
                    Access
                  </div>
                </a>
                <a href="" className="flex items-center mt-3 first:mt-0">
                  <div className="flex items-center justify-center rounded-full w-7 h-7 bg-primary/10 dark:bg-primary/20 text-primary/80">
                    <Lucide icon="CreditCard" className="w-3.5 h-3.5" />
                  </div>
                  <div className="ml-3 truncate">Product Reports</div>
                  <div className="flex items-center justify-end w-48 ml-auto text-xs truncate text-slate-500">
                    <Lucide icon="Link" className="w-3.5 h-3.5 mr-2" /> Quick
                    Access
                  </div>
                </a>
              </div>
              <div className="mb-3 font-medium">Contacts</div>
              <div className="mb-5">
                {_.take(fakerData, 4).map((faker, fakerKey) => (
                  <a
                    key={fakerKey}
                    href=""
                    className="flex items-center mt-3 first:mt-0"
                  >
                    <div className="w-7 h-7 image-fit">
                      <img
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full"
                        src={faker.photos[0]}
                      />
                    </div>
                    <div className="ml-3 truncate w-36">
                      {faker.users[0].name}
                    </div>
                    <div className="ml-auto text-xs text-right truncate w-36 text-slate-500">
                      {faker.users[0].email}
                    </div>
                  </a>
                ))}
              </div>
              <div className="mb-3 font-medium">Products</div>
              <div>
                {_.take(fakerData, 4).map((faker, fakerKey) => (
                  <a
                    key={fakerKey}
                    href=""
                    className="flex items-center mt-3 first:mt-0"
                  >
                    <div className="w-7 h-7 image-fit">
                      <img
                        alt="Rocketman - HTML Admin Template"
                        className="rounded-full"
                        src={faker.images[0]}
                      />
                    </div>
                    <div className="ml-3 truncate w-36">
                      {faker.products[0].name}
                    </div>
                    <div className="ml-auto text-xs text-right truncate w-36 text-slate-500">
                      {faker.products[0].category}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {/* END: Search Result */}
        {/* BEGIN: Notifications */}
        <Popover className="mr-5 intro-x sm:mr-6">
          <Popover.Button
            className={clsx([
              "relative outline-none block",
              "before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger before:opacity-50 before:animate-ping",
              "after:content-[''] after:w-[8px] after:h-[8px] after:rounded-full after:absolute after:top-[-2px] after:right-0 after:bg-danger",
            ])}
          >
            <Lucide icon="Bell" className="w-5 h-5 dark:text-slate-500" />
          </Popover.Button>
          <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
            <div className="mb-5 text-base font-medium">Notifications</div>
            {_.take(fakerData, 3).map((faker, fakerKey) => (
              <div
                key={fakerKey}
                className={clsx([
                  "cursor-pointer relative flex",
                  { "mt-5": fakerKey },
                ])}
              >
                <div className="flex-none w-10 h-10 mr-1 image-fit">
                  <img
                    alt="Rocketman - HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600"></div>
                </div>
                <div className="ml-2">
                  <a href="" className="mr-1 font-medium">
                    {faker.users[0].name}
                  </a>
                  <span className="text-slate-500">
                    {faker.news[0].shortContent}
                  </span>
                  <div className="mt-1 text-xs text-slate-400">
                    {faker.times[0]}
                  </div>
                </div>
              </div>
            ))}
          </Popover.Panel>
        </Popover>
        {/* END: Notifications */}
        {/* BEGIN: Notifications */}
        <div className="mr-auto intro-x sm:mr-6">
          <div className="relative cursor-pointer">
            <Lucide icon="Inbox" className="w-5 h-5 dark:text-slate-500" />
          </div>
        </div>
        {/* END: Notifications */}
        {/* BEGIN: Account Menu */}
        <Menu className="h-10 intro-x">
          <Menu.Button className="flex items-center h-full dropdown-toggle">
            <div className="w-10 h-10 image-fit">
              <img
                alt="Rocketman - HTML Admin Template"
                className="border-2 border-white rounded-full shadow-lg border-opacity-10"
                src={fakerData[9].photos[0]}
              />
            </div>
            <div className="hidden ml-3 md:block">
              <div className="max-w-[7rem] truncate font-medium">
                {fakerData[0]["users"][0]["name"]}
              </div>
              <div className="text-xs text-slate-400">
                {fakerData[0]["jobs"][0]}
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className="w-56 mt-px">
            <Menu.Item>
              <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
            </Menu.Item>
            <Menu.Item>
              <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Add Account
            </Menu.Item>
            <Menu.Item>
              <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
            </Menu.Item>
            <Menu.Item>
              <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
              <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
            </Menu.Item>
          </Menu.Items>
        </Menu>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
