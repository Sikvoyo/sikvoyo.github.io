import React, {useState} from "react";
import { useEffect } from "react";
import './LinkIcon.css';

const LinkIcon = (props) => {
   const [linkName, setName] = useState('');
   
   const {link, image, name} = props;
   useEffect(() => {
      setName(name);
   }, [name])
   console.log(props.angle, name);
   
   return(
      <>
         <div className="linkIcon">
            <a href={link}>
               <img src={require(`../../img/icons/${image}`)} alt={linkName} style={{transform: `rotate(${props.angle}deg) translateX(${350}px) rotate(-${props.angle}deg)`,
                                                                                                }} />
            </a>
         </div>
      </>
   );
}

export default LinkIcon;