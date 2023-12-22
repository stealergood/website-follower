/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";
import Whatsapp from "../svg/whatsapp";
import Logo from "../svg/logo";


export default function Navbar({theme, handleToggle}) {
  Navbar.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired,
  };
  return (
    <Disclosure as="nav" className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-between flex-shrink-0 items-center w-40 md:w-52">
                <Logo fill={`${theme === 'light' ? '#7B66FF' : '#5FBDFF'}`} className="w-14 h-14 md:w-16 md:h-16"/>
                <h1 className={`${theme === 'light' ? 'text-navlight' : 'text-navdark'} hidden md:flex font-sans font-bold md:text-2xl`}>The Sosmed</h1>
                {/* <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                /> */}
              </div>
            </div>
            <div className="flex h-16 justify-end space-x-16 w-full">
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a
                  href="#"
                  className={`inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium ${theme === 'light' ? 'text-gray-500': 'text-white'} hover:border-gray-300 hover:text-gray-700`}
                >
                  Layanan
                </a>
                <a
                  href="#"
                  className={`inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium ${theme === 'light' ? 'text-gray-500': 'text-white'} hover:border-gray-300 hover:text-gray-700`}
                >
                  Blog
                </a>
              </div>
              <div className="flex items-center md:space-x-8">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className={`${theme === 'light' ? 'bg-navlight':'bg-navdark'} relative inline-flex items-center space-x-2 rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                  >
                    <Whatsapp width="25" height="25" />
                    <span>Kontak Saya</span>
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <label className="cursor-pointer grid place-items-center transition-all">
                    <input
                      type="checkbox"
                      value="synthwave"
                      onChange={handleToggle}
                      checked={theme === "light" ? false : true}
                      className={`${theme === 'light' ? 'bg-navlight':'bg-navdark'} toggle theme-controller row-start-1 col-start-1 col-span-2 transition duration-700`}
                    />
                    <svg
                      className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                      className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Calendar
              </Disclosure.Button>
              <label className="cursor-pointer grid place-items-center w-min h-min ml-4">
                <input
                  type="checkbox"
                  value="synthwave"
                  onChange={handleToggle}
                  checked={theme === "light" ? false : true}
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
