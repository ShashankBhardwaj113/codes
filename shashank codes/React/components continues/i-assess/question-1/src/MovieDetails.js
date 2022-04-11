import React from 'react';

const MovieDetails = (props) => {
    const onClickkHandler = () => {
        props.goBackHandler(null);
    }

    return (
        <div>
            <div id='back-arrow'>
                <button onClick={onClickkHandler} style={{ borderRadius: '50%' }}> {`<`} </button>
            </div>
            <div className='image-bg'>
                <div id='movie-name'>
                    {props.movie.name}
                </div>
            </div>
            <img id='movie-img' src={props.movie.src} alt='*' />
            <ul style={{ listStyleType: 'none', margin: '0', padding: '0', overflow: 'hidden' }}>
                <li id='summar'>
                    Summary
                </li>
                <li id='showTimings'>
                    Show Timings
                </li>
            </ul>
            <div id='synopsis'>
                <h3>Synopsis</h3>
                <p>{props.movie.synopsis}</p>
            </div>
        </div>
    );
}

export default MovieDetails;