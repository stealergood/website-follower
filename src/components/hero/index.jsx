import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Instagram from "../svg/instagram";
import Twitter from "../svg/twitter";
import Facebook from "../svg/facebook";
import Tiktok from "../svg/tiktok";
import Youtube from "../svg/youtube";
// import HeroLogo from "../utils/hero.png";

// import Sosmed from "../svg/sosmedbg";


export default function Hero({ theme }) {
  Hero.propTypes = {
    theme: PropTypes.string.isRequired,
  };
  return (
    <div className="w-full h-screen">
      <div className="grid auto-rows-auto transition-all">
        <div className={`${theme === 'light' ? 'bg-white':'bg-gray-800'} flex md:items-center md:flex-row w-full justify-around md:justify-center md:space-x-10 p-8 `}>
          <Link to={"/instagram"} className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Instagram className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </Link>
          <Link to={"/twitter"} className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Twitter className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </Link>
          <Link to={"/facebook"} className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Facebook className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </Link>
          <Link to={"/tiktok"} className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Tiktok className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </Link>
          <Link to={"/youtube"} className={`${theme === 'light' ? 'bg-slate-100 hover:bg-navlight':'bg-gray-700 hover:bg-navdark'} h-16 w-16 md:w-28 md:h-28 md:mb-16 rounded-xl flex justify-center items-center transition-colors duration-700 ease-in-out cursor-pointer group/item`}>
            <Youtube className={`${theme === 'light' ? 'fill-navlight group-hover/item:fill-white':'fill-navdark group-hover/item:fill-gray-700'} md:w-16 md:h-16 h-10 w-10`}/>
          </Link>
        </div>
        {/* <div className={`${theme === 'light' ? 'bg-white':'bg-gray-800'} w-full h-full flex relative justify-center`}>
          <img src={HeroLogo} className="w-200 rounded-lg blur-vsm bg-gray-200" />
          <div className="absolute mt-36 backdrop-blur-sm  h-fit">
            <p className="text-8xl font-bold text-gray-700">Jasa Followers</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
