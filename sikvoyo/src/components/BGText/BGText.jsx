import React from "react";
import './BGText.css';

const BGTest = (props) => {
   const {text} = props;

   return(
      <>
      <div id="containerH1">
         <h1 className="unselectable" id="bgtext">{text}</h1>
      </div>
      </>
   );
}

export default BGTest;