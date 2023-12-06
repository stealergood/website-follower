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
    <div className="w-full h-full">
      <div className="grid grid-rows-2 transition-all">
        <div className={`${theme === 'light' ? 'bg-white':'bg-gray-800'} flex items-center flex-col md:flex-row w-full h-72 justify-center md:space-x-10 p-8 `}>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} w-32 md:w-28 md:h-28 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Instagram width="60" height="60" className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'}`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} w-28 h-28 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Twitter width="60" height="60" className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'}`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} w-28 h-28 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Facebook width="60" height="60" className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'}`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} w-28 h-28 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Tiktok width="60" height="60" className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'}`}/>
          </div>
          <div className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} w-28 h-28 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Youtube width="60" height="60" className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'}`}/>
          </div>
        </div>
        <div className={`${theme === 'light' ? 'bg-white':'bg-gray-800'} w-full h-full`}>

        </div>
      </div>
    </div>
  );
}
