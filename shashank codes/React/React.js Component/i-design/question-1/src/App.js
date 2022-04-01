import React from 'react';
import Profile from './Profile';

function App() {
  const data = {
      title:'My Profile',
      profileicon:require('./image/profileicon.png'),
      name:'William',
      email:'william@gmail.com',
      mobilenumber:'8976541234',
      age:27,
      address:'Great Street,London'
  }

  return (
    <Profile
    title={data.title}
    profileicon={data.profileicon}
    age={data.age}
    name={data.name}
    email={data.email}
    address={data.address}
    mobilenumber={data.mobilenumber}
    />
  );
}

export default App;
