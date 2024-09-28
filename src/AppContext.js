import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) =>{

    const [audioAllowed, setAudioAllowed] = useState(false);

    //Audio State Variables
    const [audio, setAudio] = useState(null);
    const [soundTrack, setSoundTrack] = useState(null);

    

    useEffect(()=>{
        
        //Audio Files
        const audioFile = new Audio('/sound/loader-effect-final.mp3');
        audioFile.load()
        setAudio(audioFile);
        
        //Background Sound Track
        const soundTrackFile = new Audio('/sound/sound_track_final_mix.mp3');
        soundTrackFile.load();
        soundTrackFile.loop = true;
        setSoundTrack(soundTrackFile)
    },[])

    const value = {
        audioAllowed, setAudioAllowed,
        audio, setAudio,
        soundTrack, setSoundTrack
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;