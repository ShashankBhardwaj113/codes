import React from 'react';
import { nowShowing } from './MovieListJson';

const RightPanel = (props) => {

    const onMovieClickHandler = (event) => {
        props.getMovieHandler(event.target.getAttribute('movieid'));
    }

    return (
        <>
            <td>
                {//no filters are selected
                    (props.selectedFilterLang.length === 0 && props.selectedFilterGener.length === 0 && props.selectedFilterFormat.length === 0) &&
                    nowShowing.map((movie) => {
                        return <div>
                            <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />
                        </div>
                    })
                }
                {//only language filter is selected
                    (props.selectedFilterLang.length > 0 && props.selectedFilterGener.length === 0 && props.selectedFilterFormat.length === 0) &&
                    nowShowing.map((movie) => {
                        return <>
                            {props.selectedFilterLang.map((filter) => {
                                return <div>
                                    {movie.language === filter && <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />}
                                </div>
                            })}
                        </>
                    })
                }
                {//only gener filter is selected
                    (props.selectedFilterLang.length === 0 && props.selectedFilterGener.length > 0 && props.selectedFilterFormat.length === 0) &&
                    nowShowing.map((movie) => {
                        return <>
                            {props.selectedFilterGener.map((filter) => {
                                return <div>
                                    {movie.gener === filter && <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />}
                                </div>
                            })}
                        </>
                    })
                }
                {//only format filter is selected
                    (props.selectedFilterLang.length === 0 && props.selectedFilterGener.length === 0 && props.selectedFilterFormat.length > 0) &&
                    nowShowing.map((movie) => {
                        return <>
                            {props.selectedFilterFormat.map((filter) => {
                                return <div>
                                    {movie.format === filter && <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />}
                                </div>
                            })}
                        </>
                    })
                }
                {// lang and gener filter are selected
                    (props.selectedFilterLang.length > 0 && props.selectedFilterGener.length > 0 && props.selectedFilterFormat.length === 0) &&
                    nowShowing.map((movie) => {
                        return <>
                            {props.selectedFilterLang.map((langFilter) => {
                                return <>
                                    {props.selectedFilterGener.map((generFilter) => {
                                        return <div>
                                            {(movie.language === langFilter && movie.gener === generFilter) &&
                                                <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />
                                            }
                                        </div>
                                    })}
                                </>
                            })}
                        </>
                    })
                }
                {// gener and format filter are selected
                    (props.selectedFilterLang.length === 0 && props.selectedFilterGener.length > 0 && props.selectedFilterFormat.length > 0) &&
                    nowShowing.map((movie) => {
                        return <>
                            {props.selectedFilterGener.map((generFilter) => {
                                return <>
                                    {props.selectedFilterFormat.map((formatFilter) => {
                                        return <div>
                                            {(movie.gener === generFilter && movie.format === formatFilter) &&
                                                <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />
                                            }
                                        </div>
                                    })}
                                </>
                            })}
                        </>
                    })
                }
                {// lang and format filter are selected
                    (props.selectedFilterLang.length > 0 && props.selectedFilterGener.length === 0 && props.selectedFilterFormat.length > 0) &&
                    nowShowing.map((movie) => {
                        return <>
                            {props.selectedFilterLang.map((langFilter) => {
                                return <>
                                    {props.selectedFilterFormat.map((formatFilter) => {
                                        return <div>
                                            {(movie.language === langFilter && movie.format === formatFilter) &&
                                                <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />
                                            }
                                        </div>
                                    })}
                                </>
                            })}
                        </>
                    })
                }
                {// all filter are selected
                    (props.selectedFilterLang.length > 0 && props.selectedFilterGener.length > 0 && props.selectedFilterFormat.length > 0) &&
                    nowShowing.map((movie) => {
                        return <>
                            {props.selectedFilterLang.map((langFilter) => {
                                return <>
                                    {props.selectedFilterFormat.map((formatFilter) => {
                                        return <>
                                            {props.selectedFilterGener.map((generFilter) => {
                                                return <div>
                                                    {(movie.language === langFilter && movie.format === formatFilter && movie.gener === generFilter) &&
                                                        <img key={movie.id} src={movie.src} movieid={movie.id} onClick={onMovieClickHandler} alt='*' />
                                                    }
                                                </div>
                                            })}
                                        </>
                                    })}
                                </>
                            })}
                        </>
                    })
                }
            </td>
        </>);
}

export default RightPanel;
