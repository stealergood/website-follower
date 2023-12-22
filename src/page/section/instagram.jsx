// import React from 'react'
import PropTypes from "prop-types";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Card from "../../components/card";

export default function Instagram({theme, handleToggle}) {
  Instagram.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired,
  };
  
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <Navbar theme={theme} handleToggle={handleToggle}/>

      <Card theme={theme}/>

      <Footer theme={theme}/>
    </div>
  );
}