import React from 'react';

class Profile extends React.Component{
    render(){
        return(
                    <React.Fragment>
                        <div className='container'>
                        <h1 style={{textAlign: 'center'}}>TechCrunch</h1>
                        <div id='profile-info' style={{border: '2px solid black', marginLeft:'100px', marginRight:'100px'}}>
                            <h2 style={{textAlign: 'center'}}>My Profile</h2>
                            <img id='profile-icon' style={{marginLeft:'auto', display:'block', marginRight:'auto'}} src={this.props.profileicon} alt=''></img>
                            <div id='profile-details' style={{ backgroundColor:'grey'}}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                );
    }
}

// const Profile = (props) => {
//     return(
//         <React.Fragment>
//             <div className='container'>
//             <h1 style={{textAlign: 'center'}}>TechCrunch</h1>
//             <div id='profile-info' style={{border: '2px solid black', marginLeft:'100px', marginRight:'100px'}}>
//                 <h2 style={{textAlign: 'center'}}>My Profile</h2>
//                 <img id='profile-icon' style={{marginLeft:'auto', display:'block', marginRight:'auto'}} src={props.profileicon} alt=''></img>
//                 <div id='profile-details' style={{ backgroundColor:'grey'}}>
//                     <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
//                         <thead>
//                         </thead>
//                         <tbody>
//                         <tr>
//                         <td>Name : </td>
//                         <td>{props.name}</td>
//                         </tr>
//                         <tr>
//                         <td>Email : </td>
//                         <td>{props.email}</td>
//                         </tr>
//                         <tr>
//                         <td>Mobile : </td>
//                         <td>{props.mobilenumber}</td>
//                         </tr>
//                         <tr>
//                         <td>Age : </td>
//                         <td>{props.age}</td>
//                         </tr>
//                         <tr>
//                         <td>Address : </td>
//                         <td>{props.address}</td>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//         </React.Fragment>
//     );
// }

export default Profile;
