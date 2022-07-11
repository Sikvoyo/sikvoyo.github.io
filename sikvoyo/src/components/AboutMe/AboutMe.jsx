import React from "react";
import pfp from '../../img/pfp.jpg';
import heart from '../../img/heart.png';
import './AboutMe.css';
import { DEFAULT_BG_TEXT } from "../../consts";

const AboutMe = (props) => {

   const {hoverChange} = props;

   const mouseLeave = () =>
   {
      hoverChange(DEFAULT_BG_TEXT);
   }

   const descriptions = [
      '15yo',
      'Belarus',
      'Game developer',
      'Web developer',
      'YouTuber',
      'Blenderer',
      'Procrastinator #1',
      'Weakest C# enjoyer',
      'The best HTML programmer',
      'Music is cool',
      'Anime is cool',
      'Videogames is poggers',
      'Dasher',
      'Anarchy\'s friend',
      'Pasta with molten cheese is the best',
      '196',
      '11037',
      'love u <3',
      'лю тебя <3',
      'kocham cię <3',
      'ZTM',
      'trans rights',
      'Stand with Ukraine!',
      'ø'
   ]

   return(
      <section id="aboutme">
         <div onMouseOver={() => {hoverChange("Asuka")}} onMouseLeave={mouseLeave}>
            <img src={pfp} alt="" id="pfp" />
         </div>
         <h1 className="purple" id="hi" onMouseOver={() => {hoverChange("My real name is Maxim")}} onMouseLeave={mouseLeave}>Hi! I am sikvoyø</h1>
         <h2 className="purple" onMouseOver={() => {hoverChange("++++++++")}} onMouseLeave={mouseLeave}>{descriptions.join(" + ")}</h2>
         <div className="centerHeart" onMouseOver={() => {hoverChange("<3")}} onMouseLeave={mouseLeave}>
            <img src={heart} alt="" className="heart" />
         </div>
      </section>
   );
}

export default AboutMe;