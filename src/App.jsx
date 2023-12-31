import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import Instagram from './page/section/instagram';
import Tiktok from './page/section/tiktok';
import Facebook from './page/section/facebook';
import Twitter from './page/section/twitter';
import Youtube from './page/section/youtube';
import OrderStatus from './page/orderstatus';
import PaymentStatus from './page/statuspage';


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
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} handleToggle={handleToggle} />} />
        <Route path="/instagram" element={<Instagram theme={theme} handleToggle={handleToggle} />} />
        <Route path="/twitter" element={<Twitter theme={theme} handleToggle={handleToggle} />} />
        <Route path="/facebook" element={<Facebook theme={theme} handleToggle={handleToggle} />} />
        <Route path="/tiktok" element={<Tiktok theme={theme} handleToggle={handleToggle} />} />
        <Route path="/youtube" element={<Youtube theme={theme} handleToggle={handleToggle} />} />
        <Route path="/checkorder" element={<OrderStatus theme={theme} handleToggle={handleToggle} />} />
        <Route path="/status/:order_id" element={<PaymentStatus theme={theme} handleToggle={handleToggle} />} />
      </Routes>
    </Router>
  )
}

export default App
