// import React from 'react'
import PropTypes from "prop-types";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home({theme, handleToggle}) {
  Home.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired,
  };
  
  return (
    <div className={`${theme === 'light' ? 'bg-slate-100' : 'bg-gray-800'}`}>
      <Navbar theme={theme} handleToggle={handleToggle}/>
      <Hero theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}
