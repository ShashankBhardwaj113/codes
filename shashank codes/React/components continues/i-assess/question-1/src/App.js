import React, { useState } from 'react';
import './App.css'
import Card from './Card';
import MovieDetails from './MovieDetails';
import { nowShowing, comingSoon, exclusive } from './MovieListJson.js';

const App = () => {
    const [movie, setMovie] = useState("1");
    const [detail, setDetail] = useState("body");
    const [items, setItems] = useState({});

    function nowShowingHandler() {
        setMovie("1");
    }

    function comingSoonHandler() {
        setMovie("2");
    }
    function exclusiveHandler() {
        setMovie("3")
    }

    return <div>
        {detail == "body" ? (<div><header>
            <nav className="nav">
                <ul>
                    <li id="nowShowing" onClick={nowShowingHandler}>Now Showing</li>
                    <li id="comingSoon" onClick={comingSoonHandler}>Coming Soon</li>
                    <li id="exclusive" onClick={exclusiveHandler}>Exclusive</li>
                </ul>
            </nav>
        </header>
            <div className="align-panel">
                <div className='left-panel'>
                    <p>Select Language</p>
                    <p>Select Gener</p>
                    <p>Select Format</p>
                </div>
                <div className="right-panel">
                    {movie == 1 ? nowShowing.map((nowShowingMovie) => (<Card setDetail={setDetail} setItems={setItems} Movie={nowShowingMovie} cardId={`card${nowShowingMovie.id}`} imageId={`image${nowShowingMovie.id}`} imageSrc={nowShowingMovie.src}></Card>))
                        : movie == 2 ? comingSoon.map((comingSoonMovie) => (<Card setDetail={setDetail} setItems={setItems} Movie={comingSoonMovie} cardId={`card${comingSoonMovie.id}`} imageId={`image${comingSoonMovie.id}`} imageSrc={comingSoonMovie.src}></Card>))
                            : exclusive.map((exclusiveMovie) => (<Card setDetail={setDetail} setItems={setItems} Movie={exclusiveMovie} cardId={`card${exclusiveMovie.id}`} imageId={`image${exclusiveMovie.id}`} imageSrc={exclusiveMovie.src}></Card>))}
                </div>
            </div>
        </div>) : <MovieDetails setDetail={setDetail} name={items.name} image={items.src} synopsis={items.synopsis} />}
    </div>
}

export default App;