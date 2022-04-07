import React from 'react';
import { nowShowing } from './MovieListJson';

const RightPanel = (props) => {
    return (
        <>
            <td>
                {nowShowing.map((movie)=>{
                    if(props.selectedFilter.length === 0){
                        return <>
                            <img src={movie.src} alt='*' style={{height:'200px', width: '150px', padding:'20px'}}/>
                        </>
                    }else{
                        return <>
                            {props.selectedFilter.map((filter)=>{
                                if(filter === movie.language || filter === movie.format || filter === movie.gener){
                                    return <>
                                        <img src={movie.src} alt='*' style={{height:'200px', width: '150px', padding:'20px'}}/>
                                    </>
                                }else{
                                    return <></>
                                }
                            })}
                        </>
                    }
                })}
            </td>
        </>);
}

export default RightPanel;
