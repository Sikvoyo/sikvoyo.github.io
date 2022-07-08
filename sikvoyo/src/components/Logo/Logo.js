import React from "react";
import './Logo.css';

const Logo = () => {
   return(
      <div className="logoContainer">
            <img src={require('../../img/sikvoyo.png')} alt="" className="logo"/>
      </div>
   );
}

export default Logo;