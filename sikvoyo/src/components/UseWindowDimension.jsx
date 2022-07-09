import {useState, useEffect} from "react";

const getWindowDimension = () => {
   const {innerWidth: width} = window;
   return {width};
}

function useWindowDimension()  {
   const [windowDimensions, setWindowDimensions] = useState(getWindowDimension());

   useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimension());
      }

      window.addEventListener('resize', handleResize);
   }, []);

   return windowDimensions;
}

export default useWindowDimension;