import React from "react";
import { useEffect, useState} from 'react';
import './App.css';
import { gsap } from 'gsap';
import imageOne from './minitotoro.png'

const { useRef } = React;

function App() {

  const [myTip, setMyTip] = useState('');
  const [nextTip, setNextTip] = useState('');
  
  const boxRef = useRef();


  useEffect (() => {
    async function Tip() {
      const response = await fetch (`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      setMyTip(data.activity);
    }
    Tip();
  }, [nextTip])


  useEffect(() => {
    gsap.to(boxRef.current, {
        x: -1000,
        delay: 1,
        opacity: 0,
        duration: 17, 
    })
})


  const reboot = (e) => {
    e.preventDefault();
    setNextTip(myTip);
    
  }

  return (
    <div className='container'>
       <div className="animImg">
          <img ref={boxRef} src={imageOne} alt='' width='350px'/>
        </div>

        <div className="header">
          <h1>Tip of the day</h1>
        <div className='inpBtn' onSubmit={reboot}>
          <p className="text-typing" >{myTip}</p>
          <button className="btnSearch" onClick={() => {setNextTip(myTip)} }>Next tip</button>
        </div>
        </div>
      </div>
  );
}

export default App;
