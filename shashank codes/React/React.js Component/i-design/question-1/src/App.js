import React from 'react';
import Profile from './Profile';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      title:'My Profile',
      profileicon:require('./image/profileicon.png'),
      name:'William',
      email:'william@gmail.com',
      mobilenumber:'8976541234',
      age:27,
      address:'Great Street,London'
    }
  }

  render(){
    return (
      <Profile title={this.state.title} profileicon={this.state.profileicon} >
        <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    <td>Name : </td>
                                    <td>{this.state.name}</td>
                                    </tr>
                                    <tr>
                                    <td>Email : </td>
                                    <td>{this.state.email}</td>
                                    </tr>
                                    <tr>
                                    <td>Mobile : </td>
                                    <td>{this.state.mobilenumber}</td>
                                    </tr>
                                    <tr>
                                    <td>Age : </td>
                                    <td>{this.state.age}</td>
                                    </tr>
                                    <tr>
                                    <td>Address : </td>
                                    <td>{this.state.address}</td>
                                    </tr>
                                    </tbody>
                                </table>
      </Profile>
    );
  }
}

// function App() {
//   const data = {
//       title:'My Profile',
//       profileicon:require('./image/profileicon.png'),
//       name:'William',
//       email:'william@gmail.com',
//       mobilenumber:'8976541234',
//       age:27,
//       address:'Great Street,London'
//   }

//   return (
//     <Profile
//     title={data.title}
//     profileicon={data.profileicon}
//     age={data.age}
//     name={data.name}
//     email={data.email}
//     address={data.address}
//     mobilenumber={data.mobilenumber}
//     />
//   );
// }

export default App;
