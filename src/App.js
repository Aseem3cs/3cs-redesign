import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Loader from './components/loader';
import MainContent from './components/MainContent';
import SubContent from './components/SubContent';
import EmptyContent from './components/EmptyContent';

function App() {

  const [showLoader, setShowLoader] = useState(true)
  const [audioAllowed, setAudioAllowed] = useState(false);
  
  useEffect(()=>{
    if(audioAllowed){
      setTimeout(() => {
        setShowLoader(false)
      }, 6000);
    }
  },[audioAllowed])
  

  return (
    <div className='app active'>
      {showLoader ? 
        <Loader 
          audioAllowed={audioAllowed}
          setAudioAllowed={setAudioAllowed}
        /> :
        <div className='app-conatiner-center'>
          <NavBar />
          <MainContent />
          <EmptyContent />
          <SubContent />
        </div>
      }
    </div>
  );
}

export default App;
