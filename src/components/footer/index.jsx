// import React from 'react'
import PropTypes from "prop-types";
import Logo from "../svg/logo";

export default function Footer({theme}) {
  Footer.propTypes = {
    theme: PropTypes.string.isRequired,
  };
  return (
    <div className={`${theme === 'light' ? 'bg-slate-100' : 'bg-gray-800'} w-full h-fit`}>
        <div className="grid md:flex justify-around w-full h-full p-5">

          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex justify-around items-center w-52 md:w-64">
              <Logo fill={`${theme === 'light' ? '#7B66FF' : '#5FBDFF'}`} className="w-20 h-20 md:w-28 md:h-28"/>
              <h1 className={`${theme === 'light' ? 'text-navlight' : 'text-navdark'} flex font-sans font-bold text-xl md:text-2xl`}>The Sosmed</h1>
            </div>
            <span className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} text-xs`}>Copyright © 2023 The Sosmed | All rights reserved.</span>
          </div>

          <div className="w-full">
            <div className="grid gap-2 mt-6 md:ml-5 text-lg">
              <h1 className={`${theme === 'light' ? 'text-gray-600' : 'text-slate-100'} font-bold`}>Services</h1>
              <ul className={`${theme === 'light' ? 'text-gray-600' : 'text-slate-300'} grid text-gray-500`}>
                <li><a href="">Instagram</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Tiktok</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <div className="grid gap-2 mt-6 text-lg">
              <h1 className={`${theme === 'light' ? 'text-gray-600' : 'text-slate-100'} font-bold`}>Hubungi Kami</h1>
              <ul className={`${theme === 'light' ? 'text-gray-600' : 'text-slate-300'} grid gap-1 text-gray-500`}>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <p className="ml-1">info@thesosmed.com</p>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-1">+62 812-3456-7890</p>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-2">Jl.Kembangan Baru No.64, Kembangan, Jakarta Barat</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
