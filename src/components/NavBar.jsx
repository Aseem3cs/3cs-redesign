import React, {useEffect, useRef, useState} from 'react'
import './NavBar.css'
import Logo from '../assest/comapny-logo.png';
import Gif from '../assest/test.gif'

function NavBar() {

    const [animation, setAnimation] = useState(false);
    const [listActive, setListActive] = useState(false);
    const hoverSoundRef = useRef(null);

    const handleMouseEnter = () => {
        if (hoverSoundRef.current) {
            hoverSoundRef.current.currentTime = 0;
            hoverSoundRef.current.play();
        }
    };

    useEffect(()=>{
        const setAnimationTimeOut =  setTimeout(() => {
            setAnimation(true);
        }, 2000);

        const setListActiveTimeOut = setTimeout(()=>{
            setListActive(true);
        }, 4000)

        return() =>{
            clearTimeout(setAnimationTimeOut);
            clearTimeout(setListActiveTimeOut);
        }
    },[])


  return (
    <div className='nav-bar-container'>
      {animation ? <div className='nav-bar-main-container'>
        <div className='nav-bar-logo-container'>
            <img src={Logo} alt="Company Logo" />
        </div>
        <div className="nav-bar-list-conatiner">
            <ul>
                <li className={`${listActive? 'active' : ''}`} onMouseEnter={handleMouseEnter}><p>About Us</p>
                    <div className='hover-div'>
                        <img src={Gif} alt="" />
                    </div>
                </li>
                <li className={`${listActive? 'active' : ''}`} onMouseEnter={handleMouseEnter}><p>Portfolio</p>
                    <div className='hover-div'>
                        <img src={Gif} alt="" />
                    </div>
                </li>
                <li className={`${listActive? 'active' : ''}`} onMouseEnter={handleMouseEnter}><p>Clients</p>
                    <div className='hover-div'>
                        <img src={Gif} alt="" />
                    </div>
                </li>
                <li className={`${listActive? 'active' : ''}`} onMouseEnter={handleMouseEnter}><p>Awards</p>
                    <div className='hover-div'>
                        <img src={Gif} alt="" />
                    </div>
                </li>
                <li className={`${listActive? 'active' : ''}`} onMouseEnter={handleMouseEnter}><p>Services</p>
                    <div className='hover-div'>
                        <img src={Gif} alt="" />
                    </div>
                </li>
                <li className={`${listActive? 'active' : ''}`} onMouseEnter={handleMouseEnter}><p>Investors</p>
                    <div className='hover-div'>
                        <img src={Gif} alt="" />
                    </div>
                </li>
                <li className={`${listActive? 'active' : ''}`} onMouseEnter={handleMouseEnter}><p>Careers</p>
                    <div className='hover-div'>
                        <img src={Gif} alt="" />
                    </div>
                </li>
            </ul>
            <audio ref={hoverSoundRef} src="/sound/hover_sound.mp3" preload="auto"></audio>
        </div>
      </div> : <div></div>}
    </div>
  )
}


export default NavBar
