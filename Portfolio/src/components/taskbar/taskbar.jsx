import './taskbar.css';
import { useStore } from '../../store.js';
import { useState } from 'react';

function Taskbar() {
    const toggleOn = useStore(state => state.toggleOn);
    const toggleStartButton = useStore(state => state.toggleStartButton);
    const Startmenu = useStore(state => state.startmenu);
    const currentWindow = useStore(state => state.currentWindow);
    const minimise = useStore(state => state.minimise);
    const toggleMinimise = useStore(state => state.toggleMinimise);

    const handleStart = () => {
        toggleOn();
        toggleStartButton();
    }

    function handleMinimise() {
            toggleMinimise();
    }
    
    var window_style = "open-window";
    if (minimise) {
        window_style = "closed-window";
    }

    return(
        <>
        <div className='taskbar'>
            <div className={Startmenu} onClick={handleStart}>
                {/* //logo */}
                start
            </div>
            <div className={window_style} onClick={handleMinimise}>
                {currentWindow}
            </div>
        </div>
        </>
    )
}

export default Taskbar;