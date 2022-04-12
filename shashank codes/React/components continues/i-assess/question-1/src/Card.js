import React from 'react';


const Card = (props) => {
    function setDetails() {
        props.setDetail("detail")
        props.setItems({
            name: props.Movie.name,
            src: props.Movie.src,
            synopsis: props.Movie.synopsis
        })
    }
    return (
        <card id={props.cardId} onClick={setDetails}>
            <img id={props.imageId} src={props.imageSrc} width="100px"></img>
        </card>
    )
}

export default Card;