import {React, useState} from 'react';
import Start from './components/Start/Start';
import Logo from './components/Logo/Logo'
import IconCircle from './components/IconCircle/IconCircle';
import BGTest from './components/BGText/BGText.jsx';
import { DEFAULT_BG_TEXT } from './consts';
import './App.css';

function App() {

  const [bgText, setBGText] = useState(DEFAULT_BG_TEXT);

  return (
    <>
      <BGTest text={bgText}/>
      <Start>
        <IconCircle hoverChange={setBGText}/>
        <Logo />
      </Start>
    </>
  );
}

export default App;
