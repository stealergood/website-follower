// import React from "react";
import PropTypes from "prop-types";
import Instagram from "../svg/instagram";
import Twitter from "../svg/twitter";
import Facebook from "../svg/facebook";
import Tiktok from "../svg/tiktok";
import Youtube from "../svg/youtube";


export default function Hero({ theme }) {
  Hero.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired,
  };
  return (
    <div className="w-full h-screen">
      <div className="grid auto-rows-auto transition-all">
        <div className={`${theme === 'light' ? 'bg-white':'bg-gray-800'} flex md:items-center md:flex-row w-full justify-around md:justify-center md:space-x-10 p-8 `}>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Instagram className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Twitter className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Facebook className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Tiktok className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Youtube className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </div>
        </div>
        <div className={`${theme === 'light' ? 'bg-white':'bg-white'} w-full h-full flex`}>
          {/* <div className="w-1/2 h-96 bg-slate-200">
            <div className="flex justify-start p-10">
              <div>
                <h6>JUDUL</h6>
              </div>
            </div>
            <div>deskripsi</div>
          </div>
          <div className="w-1/2 bg-slate-300">
            sama aja
          </div> */}
        </div>
      </div>
    </div>
  );
}
