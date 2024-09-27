import React, { useEffect, useState } from 'react'
import './SubContent.css'
import { TbHexagonLetterFFilled } from "react-icons/tb";
import { TbHexagonLetterSFilled } from "react-icons/tb";
import { TbHexagonLetterUFilled } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";

function SubContent() {

    const [backgroundColorh1,setBackgrounColorh1] = useState(false);
    const [backgroundColorh2,setBackgrounColorh2] = useState(false);
    const [backgroundColorh3,setBackgrounColorh3] = useState(false);

    const [loadHeaderText, setLoadHeaderText] = useState(true)

    useEffect(()=>{
        const setBackGroundh3Timeout = setTimeout(() => {
            setBackgrounColorh3(true);
        }, 1900);
        const setBackGroundh2Timeout = setTimeout(() => {
            setBackgrounColorh2(true);
        }, 2400);
        const setBackGroundh1Timeout = setTimeout(() => {
            setBackgrounColorh1(true);
        }, 2900);
        
        const setLoadHeaderTextTimeout = setTimeout(() => {
            setLoadHeaderText(false);
        }, 4100);



        return () => {
            clearTimeout(setBackGroundh3Timeout);
            clearTimeout(setBackGroundh2Timeout);
            clearTimeout(setBackGroundh1Timeout);
            clearTimeout(setLoadHeaderTextTimeout);
        };
        
    },[])

    return (
        <div className='sub-content-main-container'>
            <div className="sub-content-container-row-1">
                <div className="sub-content-container-row-1-content">
                    <div className="sub-content-container-row-1-content-header header-1" style={{ backgroundColor: ` ${backgroundColorh1 ?'#606e81':'transparent' }` }}>
                        { 
                            loadHeaderText ?
                                <div className='sub-content-container-row-1-content-header-left load'>
                                    <div className='sub-content-container-row-1-content-header-left-plus'><FiPlus /></div>
                                    Module.Standby
                                </div> 
                            :
                                <div className="sub-content-container-row-1-content-header-left">
                                    <TbHexagonLetterFFilled size={18} />
                                    <div>Feature</div>
                                </div>
                        }
                        <div className="sub-content-container-row-1-content-header-right">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 30 10" height="20px" width="60px" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4.5" cy="2.5" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="4.5" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="6.499" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="2.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="4.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="6.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="2.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="4.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="6.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="10.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="12.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="14.499" cy="2.5" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="4.5" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="6.499" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="8.499" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="16.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="18.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="8.499" r=".6" fill="currentColor"></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="sub-content-container-row-1-content-body body-1"></div>
                </div>
                <div className="sub-content-container-row-1-content">
                    <div className="sub-content-container-row-1-content-header header-2" style={{ backgroundColor: ` ${backgroundColorh2 ?'#606e81':'transparent' }` }}> 
                    { 
                        loadHeaderText ?
                            <div className='sub-content-container-row-1-content-header-left load'>
                                <div className='sub-content-container-row-1-content-header-left-plus'><FiPlus /></div>
                                Module.Standby
                            </div> 
                        :
                            <div className="sub-content-container-row-1-content-header-left">
                                <TbHexagonLetterSFilled size={18}/>
                                <div>Sub.Data</div>
                            </div>
                    }
                        <div className="sub-content-container-row-1-content-header-right">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 30 10" height="20px" width="60px" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4.5" cy="2.5" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="4.5" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="6.499" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="2.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="4.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="6.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="2.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="4.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="6.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="10.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="12.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="14.499" cy="2.5" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="4.5" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="6.499" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="8.499" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="16.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="18.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="8.499" r=".6" fill="currentColor"></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="sub-content-container-row-1-content-body body-2">
                    </div>
                </div>
                <div className="sub-content-container-row-1-content">
                    <div className="sub-content-container-row-1-content-header header-3" style={{ backgroundColor: ` ${backgroundColorh3 ?'#627088':'transparent' }` }}>
                        { 
                            loadHeaderText ?
                                <div className='sub-content-container-row-1-content-header-left load'>
                                    <div className='sub-content-container-row-1-content-header-left-plus'><FiPlus /></div>
                                    Module.Standby
                                </div> 
                            :
                                <div className="sub-content-container-row-1-content-header-left">
                                    <TbHexagonLetterUFilled size={18}/>
                                    <div>Updates</div>
                                </div>
                        }
                        <div className="sub-content-container-row-1-content-header-right">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 30 10" height="20px" width="60px" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4.5" cy="2.5" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="4.5" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="6.499" r=".6" fill="currentColor" opacity={0.2}></circle>
                                <circle cx="4.5" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="2.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="4.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="6.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="6.5" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="2.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="4.5" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="6.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="8.499" cy="8.499" r=".6" fill="currentColor" opacity={0.4}></circle>
                                <circle cx="10.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="10.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.5}></circle>
                                <circle cx="12.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="12.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.6}></circle>
                                <circle cx="14.499" cy="2.5" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="4.5" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="6.499" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="14.499" cy="8.499" r=".6" fill="currentColor" opacity={0.7}></circle>
                                <circle cx="16.499" cy="2.5" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="4.5" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="6.499" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="16.499" cy="8.499" r=".6" fill="currentColor"  opacity={0.9}></circle>
                                <circle cx="18.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="18.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="20.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="22.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="24.499" cy="8.499" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="2.5" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="4.5" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="6.499" r=".6" fill="currentColor"></circle>
                                <circle cx="26.499" cy="8.499" r=".6" fill="currentColor"></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="sub-content-container-row-1-content-body body-3"></div>
                </div>
            </div>

            <div className="sub-content-container-row-2"></div>

            {/* <div className="sub-content-container-row-3">
                <div className="sub-content-container-row-3-content">
                    <div className="sub-content-container-row-3-content-header"></div>
                    <div className="sub-content-container-row-3-content-body"></div>
                </div>
                <div className="sub-content-container-row-3-content">
                    <div className="sub-content-container-row-3-content-header"></div>
                    <div className="sub-content-container-row-3-content-body"></div>
                </div>
                <div className="sub-content-container-row-3-content">
                    <div className="sub-content-container-row-3-content-header"></div>
                    <div className="sub-content-container-row-3-content-body"></div>
                </div>
            </div>
            <div className="sub-content-container-row-4"></div> */}
        </div>
    )
}

export default SubContent
