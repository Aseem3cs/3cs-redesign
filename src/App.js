import { useContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Loader from './components/loader';
import MainContent from './components/MainContent';
import SubContent from './components/SubContent';
import EmptyContent from './components/EmptyContent';
import { AppContext } from './AppContext';


function App() {

  const {audioAllowed} = useContext(AppContext);

  const [showLoader, setShowLoader] = useState(true)
  
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
        <Loader/> 
        :
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
