import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Players from './Players';
import { Badminton, Cricket, Football, Hockey } from './Sportinfo';
import Sports from './Sports';
import AboutPlayer from './AboutPlayer';





const App = () => {

  //Fill your code here
  return (
    <React.Fragment>
      <div id='header'>
        <h3>Sports Council</h3>
        <Link id='sports' to='/sports' style={{marginTop: '20px', marginLeft: '850px'}}>Sports Category</Link>
        <Link id='players' to='/players' style={{marginTop: '20px', marginLeft: '20px'}}>Cricket Players Selected</Link>
      </div>
      <Routes>
        <Route path='/' element={<Sports />}></Route>
        <Route path='/sports/*' element={<Sports />}></Route>
        <Route path='/football/*' element={<Football />}></Route>
        <Route path='/cricket/*' element={<Cricket />}></Route>
        <Route path='/badminton/*' element={<Badminton />}></Route>
        <Route path='/hockey/*' element={<Hockey />}></Route>
        <Route path='/players/*' element={<Players />}></Route>
        <Route path='/players/sachin' element={<AboutPlayer name={'sachin'}/>}></Route>
        <Route path='/players/dhoni' element={<AboutPlayer name={'dhoni'}/>}></Route>
        <Route path='/players/yuvaraj' element={<AboutPlayer name={'yuvaraj'}/>}></Route>
        <Route path='/players/rickyponting' element={<AboutPlayer name={'rickyPonting'}/>}></Route>
        <Route path='/players/benstokes' element={<AboutPlayer name={'benStokes'}/>}></Route>
        <Route path='/players/stevesmith' element={<AboutPlayer name={'steveSmith'}/>}></Route>
      </Routes>
    </React.Fragment>
  );

}

export default App;
