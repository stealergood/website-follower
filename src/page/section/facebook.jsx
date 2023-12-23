import { useState } from 'react';
import PropTypes from "prop-types";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";
import Fb from '../../components/svg/facebook'


export default function Facebook({theme, handleToggle}) {
  Facebook.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.string.isRequired
  };

  const [switchCard, setSwitchCard] = useState("followers");
  const [active, setActive] = useState("followers");

  const categories = {
    "followers": [
      {"name": "Followers Facebook", "value": 100, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Facebook", "value": 300, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Facebook", "value": 500, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Followers Facebook", "value": 1000, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
    "likes": [
      {"name": "Likes Facebook", "value": 100, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Facebook", "value": 300, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Facebook", "value": 500, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Likes Facebook", "value":1000, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
    "views": [
      {"name": "Views Facebook", "value": 1000, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Facebook", "value": 3000, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Facebook", "value": 5000, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
      {"name": "Views Facebook", "value": 10000, "price": 10000, "icon": <Fb className={`${theme === 'light' ? 'fill-navlight' : 'fill-navdark'} w-16 h-16`}/>},
    ],
  }

  const handleSwitchCard = (category) => {
    setSwitchCard(category);
    setActive(category);
  }
  
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <Navbar theme={theme} handleToggle={handleToggle}/>
      <Card theme={theme} categories={categories} handleSwitchCard={handleSwitchCard} active={active} switchCard={switchCard}/>
      <Footer theme={theme}/>
    </div>
  );
}