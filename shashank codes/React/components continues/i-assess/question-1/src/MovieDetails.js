import React from 'react';

const MovieDetails = (props) => {
    const onClickkHandler = () => {
        props.goBackHandler(null);
    }

    return (
        <div>
            <div>
                <button onClick={onClickkHandler}> {`<`} </button>
            </div>
            <img src={props.movie.src} />
            <div>{props.movie.name}</div>
            <div>
                <h3>Synopsis</h3>
                <p>{props.movie.synopsis}</p>
            </div>
        </div>
    );
}

export default MovieDetails;