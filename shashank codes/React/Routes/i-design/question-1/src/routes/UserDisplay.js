import React from 'react';
import { userList } from '../components/UserList';
import LoginHeader from '../components/LoginHeader';

const UserDisplay = () => {
    return (
        <div>
            <LoginHeader num = {1}/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            userList.map((user)=>{
                                return (<tr key={user.id}>
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.mobileNumber}
                                </td>
                                <td>
                                    {user.address}
                                </td>
                                </tr>
                                );
                            })
                        }
                </tbody>
            </table>
        </div>
    );
}

export default UserDisplay;