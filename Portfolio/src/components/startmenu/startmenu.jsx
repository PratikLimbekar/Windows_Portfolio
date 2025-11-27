import './startmenu.css';
import {useStore} from '../../store.js'; 

function Startmenu() {
    const toggleOn = useStore(state => state.toggleOn);
    const toggleWindow = useStore(state => state.toggleWindow);
    const toggleStartButton = useStore(state => state.toggleStartButton);
    const toggleCurrentWindow = useStore(state => state.toggleCurrentWindow);

    function handleWindow(window) {
        toggleStartButton();
        toggleOn();
        toggleCurrentWindow(window);
        toggleWindow();
        console.log(toggleWindow);
    }

    return(
        <>
            <div className='start-menu'>
                <div className='name'>
                    Pratik Limbekar
                </div>
                <div className='contents'>
                    <div className='column-one'>
                        <div className='content' onClick={() => (handleWindow("Binary Notes"))}> 
                            {/* Normal function has its own this and arrow function inherits it from surrounding space
                            Hence, arrow functions are great for callbacks. */}
                            Binary Notes
                        </div>
                        <div className='content' onClick={() => (handleWindow("Portfolio"))}>
                            Portfolio
                        </div>
                    </div>
                    <div className='column-two'>
                        <div className='content'>
                            Content
                        </div>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <div></div>
                    <div className='button'>
                        <img></img>LinkedIn
                    </div>
                    <div className='button'>
                        GitHub
                    </div>
                </div>
            </div>
        </>
    );
}

export default Startmenu;