import { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Form from "../../components/form";
import Yt from '../../components/svg/youtube';


export default function Youtube({theme, handleToggle}) {
  Youtube.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.string.isRequired
  };

  const [switchCard, setSwitchCard] = useState("followers");
  const [active, setActive] = useState("followers");
  const [buttonBuy, setButtonBuy] = useState({});

  const categories = {
    "followers": [
      {"name": "Followers Youtube", "value": 100, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Youtube", "value": 300, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Youtube", "value": 500, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Youtube", "value": 1000, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
    "likes": [
      {"name": "Likes Youtube", "value": 100, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Youtube", "value": 300, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Youtube", "value": 500, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Youtube", "value":1000, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
    "views": [
      {"name": "Views Youtube", "value": 1000, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Youtube", "value": 3000, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Youtube", "value": 5000, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Youtube", "value": 10000, "price": 10000, "icon": <Yt className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
  }

  const handleSwitchCard = (category) => {
    setSwitchCard(category);
    setActive(category);
  }
  
  const handleBuy = (category) => {
    setButtonBuy(category);
  }
  
  return (
    <div className={`${theme === 'light' ? 'bg-slate-100' : 'bg-gray-800'}`}>
      <Navbar theme={theme} handleToggle={handleToggle}/>
      <Card theme={theme} categories={categories} handleSwitchCard={handleSwitchCard} active={active} switchCard={switchCard} handleBuy={handleBuy}/>
      <Form theme={theme} buttonBuy={buttonBuy}/>
      <Footer theme={theme}/>
    </div>
  );
}