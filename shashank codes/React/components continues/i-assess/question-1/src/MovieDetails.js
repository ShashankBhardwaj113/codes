import React from 'react';

const MovieDetails = (props) => {
    function setDetails() {
        props.setDetail("body");
    }
    return (
        <div>
            <div className='image-bg'>
            </div>
            <div id='back-arrow' onClick={setDetails}><img src={require('./images/back-arrow.png')} width="25px" alt='arrow' /></div>
            <img id='movie-img' src={props.image} width="100px"></img>
            <div id='movie-name'>{props.name}</div>
            <ul>
                <li id='summary'>Summary</li>
                <li id='showTimings'>Show Timings</li>
            </ul>
            <div id='synopsis'>
                <h3>Synopsis</h3>
                <p>{props.synopsis}</p>
            </div>
        </div>
    )
}

export default MovieDetails;