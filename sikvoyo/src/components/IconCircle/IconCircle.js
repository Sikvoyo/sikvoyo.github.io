import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import LinkIcon from "../LinkIcon/LinkIcon";
import './IconCircle.css';
const iconsJSON = require('../../jsons/icons.json');

const IconCircle = (props) => {
   
   const ref = useRef(null);

   const [width, setWidth] = useState(0);
   const [height, setHeight] = useState(0);

   useLayoutEffect(() => {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
      console.log(width, height);
   }, [ref.current]);

   const iconsArray = iconsJSON.icons;
   
   const iconsList = iconsArray.map((icon, index) => {
      return <LinkIcon link={icon.link} name={icon.name} image={icon.image} key={index} className="circleIcon"/>
   })

   let radius = 300;

   return(
      <div className="iconsContainer" ref={ref}>
         <div className="iconsContainerGrid">
            {iconsList}
         </div>
      </div>
   );
}

export default IconCircle;