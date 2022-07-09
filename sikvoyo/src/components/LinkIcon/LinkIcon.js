import React, {useState,  useEffect } from "react";
import useWindowDimension from '../UseWindowDimension.jsx';
import './LinkIcon.css';
import { DEFAULT_BG_TEXT } from "../../consts";

const LinkIcon = (props) => {
   const [linkName, setName] = useState('');
   const {width} = useWindowDimension();
   
   const {link, image, name, hoverChange, classN} = props;
   useEffect(() => {
      setName(name);
   }, [name])

   const getTranslate = (w) => {
      const minValue = 100;
      const maxValue = 300;

      const rawValue = w / 4;
      const newValue = Math.min(Math.max(rawValue, minValue), maxValue);

      return newValue;
   }
   
   return(
      <>
         <div className="linkIcon">
            <a  href={link} style={{transform: `rotate(${props.angle}deg) translateX(${getTranslate(width)}px) rotate(-${props.angle}deg)`}}
            onMouseOver={() => hoverChange(name)} onMouseLeave={() => hoverChange(DEFAULT_BG_TEXT)} className={classN}>
               <img className="rotate" src={require(`../../img/icons/${image}`)} alt={linkName}/>
            </a>
         </div>
      </>
   );
}

export default LinkIcon;