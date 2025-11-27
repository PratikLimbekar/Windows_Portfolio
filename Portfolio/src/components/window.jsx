import './window.css';
import { useStore } from '../store.js';
import { useState } from 'react';

function Window() {
    const toggleWindow = useStore(state => state.toggleWindow);
    const currentWindow = useStore(state => state.currentWindow);
    const toggleCurrentWindow = useStore(state => state.toggleCurrentWindow);
    const minimise = useStore(state => state.minimise);
    const toggleMinimise = useStore(state => state.toggleMinimise);
    function handleClose() {
        toggleWindow();
        toggleCurrentWindow("");
    }
    if (!minimise) {
    return(
        <div className='window'>
            <div className='top-bar'>
                <div className='title'>
                    {currentWindow}
                </div>
                <div className='window-control' onClick={() => (toggleMinimise())}>
                    -
                </div>
                <div className='window-control'>
                    🗖
                </div>
                <div className='window-control' onClick={handleClose}>
                    X
                </div>
            </div>
            <div className='iframe'>
                Content here
            </div>
        </div>
    );
} else {
    return null;
}
}

export default Window;

