import './binary.css';
import { useState } from 'react';

function Binary() {
    const [binary, setbinary] = useState(false);
    const [userQuery, setuserQuery] = useState("");

    if (!binary){
    return(
        <div className='binary' onClick={setbinary}>
            <div className='circles'>
                O     O 
            </div>
        </div>
    );
} else {
    return(
        <div className='binary-expanded'>
            <div className='bin-logo'>
                O     O
            </div>
            <div className='bin-text'>
                Hi! I am Binary! How can I help you?
            </div>
            <div className='user-query'>
                <input type='textbox' placeholder=' Enter your query ' onChange={setuserQuery}></input>
                <button className='send'> Ask </button>
            </div>
        </div>
    )
}
}

export default Binary;