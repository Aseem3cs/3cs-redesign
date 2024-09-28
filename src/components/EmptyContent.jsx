import React, { useEffect, useState } from 'react'
import './EmptyContent.css'
import { FaLongArrowAltDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function EmptyContent() {

  const {soundTrack} = useContext(AppContext);

  useEffect(()=>{
    if (soundTrack) {
      soundTrack.play();
    } 
  },[soundTrack])

  const [muteText, setMuteText] = useState('Ambience.Mute');
  const handleMuteSoundTrack = () =>{
    setMuteText(()=>muteText === 'Ambience.Mute' ? 'Ambience.Unmute': 'Ambience.Mute')
    if (soundTrack && !soundTrack.paused) {
      soundTrack.pause();
  } else if (soundTrack) {
      soundTrack.play();
  }
  }

  return (
    <div className='empty-content-container'>
      <div className="empty-content">
        <div className="empty-content-left">
            <div className='empty-content-left-icon'><FaLongArrowAltDown size={16}/></div>
            <div>Scroll</div>    
        </div>
        <div className="empty-content-right" onClick={handleMuteSoundTrack}>{muteText} 
          <div className='empty-content-right-plus'><FiPlus /></div>
        </div>
      </div>
      <div className="after-empty-content"></div>
    </div>
  )
}

export default EmptyContent
