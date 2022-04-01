import React from 'react';
import { NavLink } from 'react-router-dom';

export const Players = () => {
  
  //Fill your code here
  return <React.Fragment>
    <div id='players'>
    <NavLink to='/players/sachin' id='sachin'>Sachin || </NavLink>
    <NavLink to='/players/dhoni' id='dhoni'>Dhoni || </NavLink>
    <NavLink to='/players/yuvaraj' id='yuvaraj'>Yuvaraj || </NavLink>
    <NavLink to='/players/rickyPonting' id='rickyPonting'>Ricky Ponting || </NavLink>
    <NavLink to='/players/benStokes' id='benStokes'>Ben Stokes || </NavLink>
    <NavLink to='/players/steveSmith' id='steveSmith'>Steve Smith</NavLink>
    </div>
  </React.Fragment>
}

export default Players;