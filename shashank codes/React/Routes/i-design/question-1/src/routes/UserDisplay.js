import React from 'react';
import { userList } from '../components/UserList';

const UserDisplay = () => {
    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
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
    );
}

export default UserDisplay;