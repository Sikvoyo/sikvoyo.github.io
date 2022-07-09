import React from "react";
import LinkIcon from "../LinkIcon/LinkIcon";
import './IconCircle.css';
const iconsJSON = require('../../jsons/icons.json');

const IconCircle = (props) => {  

   const {hoverChange} = props;

   const iconsArray = iconsJSON.icons;
   
   const iconsList = iconsArray.map((icon, index) => {
      const degDifference = 360 / iconsArray.length;
      return <LinkIcon 
         classN='link-icon'
         hoverChange={hoverChange}
         link={icon.link} 
         name={icon.name} 
         image={icon.image} 
         key={index} 
         angle={(index) * degDifference}
         />
   })

   const opacityAnimate = (arr, currentElement) => {
      console.log(currentElement)
      setTimeout(() => {
         arr[currentElement].classList.add('animateIcon');
         if (arr.length !== currentElement + 1) {
            opacityAnimate(arr, currentElement + 1);
         }
      }, 200);
   }
   
   const iconsElements = document.getElementsByClassName('link-icon');
   opacityAnimate(iconsElements, 0);

   return(
      <div className="centr"> 
         <div className="iconsContainer">
            {iconsList}
         </div>
      </div>
   );
}

export default IconCircle;