import React from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
    return <div id='sports' style={{marginTop: '20px'}}>
        <Link to='/football' id='football'>Football</Link>
        <br></br>
        <Link to='/cricket' id='cricket'>Cricket</Link>
        <br></br>
        <Link to='/hockey' id='hockey'>Hockey</Link>
        <br></br>
        <Link to='/badminton' id='badminton'>Badminton</Link>
    </div>
}

export default Sports;