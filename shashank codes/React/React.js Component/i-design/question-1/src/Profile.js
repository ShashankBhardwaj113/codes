import React from 'react';

const Profile = (props) => {
    return(
        <div className='container'>
            <h1>TechCrunch</h1>
            <div id='profile-info'>
                <h2>My Profile</h2>
                <img id='profile-icon' src={props.profileicon} alt='*'></img>
                <div id='profile-details'>
                    <table>
                        <tbody>
                        <tr>
                        <td>Name : </td>
                        <td>{props.name}</td>
                        </tr>
                        <tr>
                        <td>Email : </td>
                        <td>{props.email}</td>
                        </tr>
                        <tr>
                        <td>Mobile : </td>
                        <td>{props.mobilenumber}</td>
                        </tr>
                        <tr>
                        <td>Age : </td>
                        <td>{props.age}</td>
                        </tr>
                        <tr>
                        <td>Address : </td>
                        <td>{props.address}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Profile;