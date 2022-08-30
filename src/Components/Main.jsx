import Slides from "./Slides.jsx"
import "./Main.css"
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
export const Main = () => {
    const [yOffset, setYOffset] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    function handleScroll() {
      const currentYOffset = window.pageYOffset;
      const visible = yOffset > currentYOffset;
  
      setYOffset(currentYOffset);
      setVisible(visible);
    }
    return (
        <div>
            <div>
                <Navbar visible={visible} />
            </div>
            <div className="top">
                <div className="topContent">
                    <p className="big ">You Aim,</p>
                    <p className="big blue">We Generate.</p>
                    <p className="we">We are a top-notch Digital Marketing, Design and eCommerce agency growing brands in today's connected world driven by the idea that the art of communication could advance society, with our innovative solution.</p>
                    <button className="viewbtn">View Our Showreel</button>
                </div>
            </div>
            <div className="slides">
                <Slides/>
            </div>

        </div>
    )
}