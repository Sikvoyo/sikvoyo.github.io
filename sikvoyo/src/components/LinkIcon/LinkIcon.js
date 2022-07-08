import React, {useState} from "react";
import { useEffect } from "react";
import './LinkIcon.css';

const LinkIcon = (props) => {
   const [linkName, setName] = useState('');
   
   const {link, image, name} = props;
   useEffect(() => {
      setName(name);
   }, [name])
   
   return(
      <>
         <div className="linkIcon">
            <a href={link}>
               <img src={require(`../../img/icons/${image}`)} alt={linkName} />
            </a>
         </div>
      </>
   );
}

export default LinkIcon;