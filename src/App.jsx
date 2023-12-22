import { useState, useEffect } from 'react';

import './App.css';
// import Home from './page/home';
import Instagram from './page/section/instagram';


function App() {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      {/* <Home theme={theme} handleToggle={handleToggle}/> */}
      <Instagram theme={theme} handleToggle={handleToggle}/>
    </>
  )
}

export default App
