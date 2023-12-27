import { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Form from "../../components/form";
import Ig from '../../components/svg/instagram';


export default function Instagram({theme, handleToggle}) {
  Instagram.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.string.isRequired
  };

  const [switchCard, setSwitchCard] = useState("followers");
  const [active, setActive] = useState("followers");
  const [buttonBuy, setButtonBuy] = useState({});

  const categories = {
    "followers": [
      {"name": "Followers Instagram", "value": 1000, "price": 25000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Instagram", "value": 3000, "price": 60000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Instagram", "value": 5000, "price": 110000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Instagram", "value": 10000, "price": 200000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
    "likes": [
      {"name": "Likes Instagram", "value": 100, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Instagram", "value": 300, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Instagram", "value": 500, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Instagram", "value":1000, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
    "views": [
      {"name": "Views Instagram", "value": 1000, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Instagram", "value": 3000, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Instagram", "value": 5000, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Instagram", "value": 10000, "price": 10000, "icon": <Ig className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
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