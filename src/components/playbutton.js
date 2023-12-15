import './playbutton.css'
import { useState } from 'react';


function Playbutton({ children, onPlay, onPause}) {
  console.log('render playbutton')

  const [playing,setPlaying] = useState(false)
  function handleClick(e){
    e.stopPropagation()
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing)
  }

  return (
    <button onClick={handleClick} className='playbutton-only'> {children} : {playing?'⏸️':'▶️'} </button>
  );
}

export default Playbutton;
