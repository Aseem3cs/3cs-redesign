import React from 'react'
import './EmptyContent.css'
import { FaLongArrowAltDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

function EmptyContent() {
  return (
    <div className='empty-content-container'>
      <div className="empty-content">
        <div className="empty-content-left">
            <div className='empty-content-left-icon'><FaLongArrowAltDown size={16}/></div>
            <div>Scroll</div>    
        </div>
        <div className="empty-content-right">Ambience.Mute 
          <div className='empty-content-right-plus'><FiPlus /></div>
        </div>
      </div>
      <div className="after-empty-content"></div>
    </div>
  )
}

export default EmptyContent
