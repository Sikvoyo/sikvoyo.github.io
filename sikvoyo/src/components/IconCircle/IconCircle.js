import React from "react";
import LinkIcon from "../LinkIcon/LinkIcon";
import './IconCircle.css';
const iconsJSON = require('../../jsons/icons.json');

const IconCircle = (props) => {  

   const iconsArray = iconsJSON.icons;
   
   const iconsList = iconsArray.map((icon, index) => {
      const degDifference = 360 / iconsArray.length;
      return <LinkIcon 
         link={icon.link} 
         name={icon.name} 
         image={icon.image} 
         key={index} 
         angle={(index) * degDifference}/>
   })
   // console.log('конец цикла');

   return(
      <div className="centr"> 
         <div className="iconsContainer">
            {iconsList}
         </div>
      </div>
   );
}

export default IconCircle;