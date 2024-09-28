import React, { useContext, useState, useEffect } from 'react';
import './loader.css';
import StartWindowBg from '../assest/enter_page_bg.jpg';
import { AppContext } from '../AppContext';

const Loader = () => {

    const {
        audioAllowed, setAudioAllowed,
        audio, soundTrack,
        
    } = useContext(AppContext);


    const [glitchText, setGlitchText] = useState(false);
    
    const [testPlay, setTestPlay] = useState(false);
    
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {

        const glitchTimeout = setTimeout(() => {
            setGlitchText(true);
        }, 3500);

        const removeGlitchTimeout = setTimeout(() => {
            setGlitchText(false);
        }, 4500);
        setShowBtn(true);

        if (audio) {
            audio.addEventListener('ended', () => {
                if (soundTrack) {
                    soundTrack.play();
                } else {
                    console.log('No soundTrack available');
                }
            });
        }

        return () => {
            clearTimeout(glitchTimeout);
            clearTimeout(removeGlitchTimeout);
        };
        
    }, [audioAllowed]);

    const handle_play_audio = () => {
        setAudioAllowed(true);
        if (audio) {
            audio.play();
        }

        const setSoundTrackTimeOut = setTimeout(() => {
            setTestPlay(true);
        }, 5500);

        return() =>{
            clearTimeout(setSoundTrackTimeOut);
        }

    };

    useEffect(()=>{
        if(soundTrack){
            soundTrack.play();
        }
    },[testPlay])

    return (
        <div>
            {audioAllowed ? (
                <div className='loader-container'>
                    <div className='loader-2'></div>
                    <h1 className={`loader-text ${glitchText ? 'glitch' : ''}`}>3CS</h1>
                </div>
            ) : (
                showBtn ?
                (
                    <div className='start-window-main-container'>

                        <div className="start-window-container">
                            <div className="start-window-bg-container">
                                <img src={StartWindowBg} alt="Background" />
                            </div>
                            <div className="start-window-content-container">
                                <div className='start-window-content-container-sub'>
                                    <p className='start-window-content-container-sub-p1'>3CS.Presents</p>
                                    <p className='start-window-content-container-sub-p2'>A State of Mind</p>
                                    <p  className='start-window-content-container-sub-p3'>Architected with 3cs</p>

                                    <div className='enter-btn-container' onClick={handle_play_audio}>
                                        <div className='enter-btn-left'>
                                            <div className='enter-btn-left-left'></div>
                                            <div className='enter-btn-left-right'>
                                                <div className='enter-btn-left-right-small'></div>
                                            </div>
                                        </div>
                                        <p>Enter 3cs</p>
                                    </div>

                                    <div className='copy-right-text-container'>
                                        <p>Copyright © 2024 3CS Asia (Private) Limited</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* <div className='start-btn' onClick={handle_play_audio}>
                            Start
                        </div> */}
                    </div>
                ):
                <div></div>)}
        </div>
    );
};

export default Loader;