import React, { useEffect, useState } from 'react'
import './MainContent.css'
import { FaCircleRadiation } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import MatrixAnimation from './MatrixAnimation';

function MainContent() {
  
  const [loaderTexts, setLoaderTexts] = useState(0);
  const [loaderLogo, setLoaderLogo] = useState(true);
  
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [hideLoaderText, setHideLoaderText] = useState(false);
  const [startMatrixAnimation, setStartMatrixAnimation] = useState(false);
  const [afterMatrixAni, setAfterMatrixAni] = useState(false);

  useEffect(()=>{
    const setLoaderTextTimeOut = setTimeout(() => {
      setLoaderTexts(1)
    }, 1900);
    
    const setLoaderText2TimeOut = setTimeout(() => {
      setLoaderTexts(2)
    }, 3900);
    
    const setLoaderLogoTimeOut = setTimeout(() => {
      setLoaderLogo(false)
    }, 4300);
    
    const setDisableAnimationTimeOut = setTimeout(() => {
      setDisableAnimation(true)
    }, 6300);

    const setLoaderText2_2TimeOut = setTimeout(() => {
      setLoaderTexts(3)
    }, 4900);

    return()=>{
      clearTimeout(setLoaderTextTimeOut)
      clearTimeout(setLoaderText2TimeOut)
      clearTimeout(setLoaderLogoTimeOut)
      clearTimeout(setLoaderText2_2TimeOut)
      clearTimeout(setDisableAnimationTimeOut)
    }
  },[])

  useEffect(()=>{
    if(disableAnimation){
      const setStartMatrixAnimationTimeOut = setTimeout(() => {
        setStartMatrixAnimation(true);
        setHideLoaderText(true);
      }, 500);

      return()=>{
        clearTimeout(setStartMatrixAnimationTimeOut);
      }
    }
  },[disableAnimation])

  useEffect(()=>{
    if(startMatrixAnimation){
      const setAfterMatrixAniTimeOut = setTimeout(() => {
        setAfterMatrixAni(true)
      }, 700);

      return()=>{
        clearTimeout(setAfterMatrixAniTimeOut);
      }
    }
  },[startMatrixAnimation])
  
  return (
    <div className='main-content-container'>
      <div className="main-container-top-small-box"></div>
      <div className="main-content-loader-container">


        {/* Loader Effect 01*/}
        {
          loaderLogo ? 
            <div className='main-loader-icon-container'><FaCircleRadiation size={16} fill='white'/></div>
          :
            <div className={`main-content-loader-container-text-container ${disableAnimation && 'fade-out'}`} style={{display:`${hideLoaderText && 'none'}`}}>
              <p>Loading Sub.Content</p>
              <p className='main-content-loader-container-text-container-dot dot-1'>.</p>
              <p className='main-content-loader-container-text-container-dot dot-2'>.</p>
              <p className='main-content-loader-container-text-container-dot dot-3'>.</p>
            </div> 
        }

        {/* Loader Effect 02 */}
        <div className="main-loader-text-container" style={{display:`${disableAnimation && 'none'}`}}>
          {
            loaderTexts === 0 ? 
            <p className='main-loader-text-container-p1'>Construct.Expansion</p> 
            :
            ( 
              <div className='main-loader-text-container-p2-icon-container' style={{display:`${loaderTexts === 3 && 'none'}`}}>
                <svg className='bracket-svg' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 21H5V3h3"></path>
                </svg>
              {
                loaderTexts === 1 ?
                  <p className='main-loader-text-container-p2'>Pls.Standby</p> 
                : (loaderTexts === 2 && 
                  <div className='main-loader-text-container-p2-plus'><FiPlus/></div>)
              }
                <svg stroke="currentColor" className='bracket-svg' fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3h3v18h-3"></path>
                </svg>
              </div>
            )
            
          }
        </div>

        {/* Loader Effect 03 */}

        {startMatrixAnimation && 
          <MatrixAnimation 
            afterMatrixAni={afterMatrixAni}
          />
        }
      </div>
    </div>
  )
}

export default MainContent
