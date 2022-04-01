import React from 'react';
import ProfileImg from '../ProfileImg.png';

const LoginHeader = (props) => {
    return <header>Tutorial 
            {props.num === 1 && <div id='user-logo'><img src={ProfileImg} alt='' /></div>}
        </header>
}

export default LoginHeader;