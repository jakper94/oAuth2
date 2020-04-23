import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="navigation">
      <div className="logo">
        <div className="text">
          <h4>oAuth2</h4>
          
         
        </div>
      </div>
      <div className="menu">
        <NavLink exact to="/" onClick={() => scrollToTop()}>
          Home
        </NavLink>
        <NavLink exact to ="/about" onClick= {()=> scrollToTop()}>
          About
        </NavLink>
        
       
       
      </div>
    </div>
  );
};

export default Navigation;
