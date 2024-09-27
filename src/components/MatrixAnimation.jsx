import React, { useEffect, useState } from 'react'
import './MatrixAnimation.css'
import { CgShapeHalfCircle } from "react-icons/cg";
import { FaCircleRadiation } from "react-icons/fa6";

function MatrixAnimation({afterMatrixAni}) {

    const [loaderText,setLoaderText ] = useState(false)

    useEffect(()=>{

        const setLoaderTextTimeOut = setTimeout(() => {
            setLoaderText(true);
        }, 2100);

        return()=>{
            clearTimeout(setLoaderTextTimeOut);
        }
    },[])

  return (
    <div className='main-loader-matrix-animation-container'>
        {
        afterMatrixAni ?
            <div className='main-loader-matrix-animation-2-container-box'>
                <div className="main-loader-matrix-animation-2-ani-01">
                    <div className='ani-01-icon-left'><CgShapeHalfCircle stroke='#768296' strokeWidth={1} color='#2c3648'/></div>
                    <div className='ani-01-icon-right'><CgShapeHalfCircle stroke='#768296' strokeWidth={1} color='#2c3648'/></div>
                    <div className='ani-01-icon-left-small'>
                        <svg stroke="currentColor" fill="none" stroke-width="2.4" viewBox="0 0 24 24" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="half-fill-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                                    <stop offset="50%" style={{ stopColor: '#768296', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>

                            <path d="M16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20V17C13.2386 17 11 14.7614 11 12C11 9.23858 13.2386 7 16 7V4Z" fill="currentColor" stroke="#768296"></path>
                        </svg>
                    </div>
                    <div className='ani-01-icon-right-small'>
                        <svg stroke="currentColor" fill="none" stroke-width="2.4" viewBox="0 0 24 24" width="100" height="100" xmlns="http://www.w3.org/2000/svg">

                            <defs>
                                <linearGradient id="half-fill-right-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="50%" style={{ stopColor: '#768296', stopOpacity: 1 }} />
                                    <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                           
                            <defs>
                                <linearGradient id="half-fill-right-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="50%" style={{ stopColor: '#2c384a', stopOpacity: 1 }} />
                                    <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>

                            <path d="M16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20V17C13.2386 17 11 14.7614 11 12C11 9.23858 13.2386 7 16 7V4Z" fill="currentColor" stroke="#768296"></path>
                        </svg>
                    </div>

                    <div className='ani-01-icon-center'><FaCircleRadiation size={40}/></div>
                </div>
                <div className="main-loader-matrix-animation-2-ani-02">
                    <div className='border-animation'></div>
                    <div className='main-loader-matrix-animation-2-ani-02-contents'>
                        <div className='main-loader-matrix-animation-2-ani-02-content-image'>
                            
                        </div>
                        <div className='main-loader-matrix-animation-2-ani-02-content'>
                            {
                                loaderText ? 
                                    <p className='main-loader-matrix-animation-2-ani-02-content-p3'>Module.Engaged</p>
                                :
                                    <p className='main-loader-matrix-animation-2-ani-02-content-p1'><span>Loading</span>.Module</p>
                            }
                            <p className='main-loader-matrix-animation-2-ani-02-content-p2'>Initializing.mechanism</p>
                        </div>
                    </div>
                </div>
            </div> 
        : 
            <div className="maina-loader-matrix-animation-container-box">
            </div>
        }
</div>
  )
}

export default MatrixAnimation
