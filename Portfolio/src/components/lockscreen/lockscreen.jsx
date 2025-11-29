import './lockscreen.css';

function LockScreen() {
    return(
        <div className='lockscreen'>
            <div className='ls-topbar'>
            </div>
            <div className='ls-middle'>
                <div className='ls-left'>
                    Welcome
                </div>
                <div className='ls-right'>
                    <div className='user'>
                        <div className='user-image'>
                            <img></img>
                        </div>
                        <div className='username'>
                            Viewer
                        </div>
                    </div>
                </div>
            </div>
            <div className='ls-bottom'>

            </div>
        </div>
    );
}

export default LockScreen;