import React,  { useEffect } from 'react'
import Home from './views/Home'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App