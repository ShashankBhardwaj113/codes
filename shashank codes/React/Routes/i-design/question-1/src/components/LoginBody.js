import React, { useState } from 'react';
import LoginHeader from './LoginHeader';
import { userList } from './UserList';

const LoginBody = (props) => {
    const [enteredUsername, setUsername] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [logState, setLogState] = useState(1);

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        for(let i=0; i<userList.length; i++){
            if(userList[i].username === enteredUsername && userList[i].password === enteredPassword){
                props.loginState(1);
                break;
            }else if(userList[i].username === enteredUsername && userList[i].password !== enteredPassword){
                setLogState(2);
                props.loginState(2);
                break;
            }else{
                setLogState(0);
                props.loginState(0);
                break;
            }
        }

        setUsername('');
        setPassword('');
    }

    return (
        <div>
            <LoginHeader />
            <h1>Login</h1>
            <form onSubmit={onSubmitHandler} id='login-form'>
                <input type='text' id='username' placeholder='username' onChange={usernameHandler} value={enteredUsername}></input>
                <br/>
                <input type='text' id='password' placeholder='password' onChange={passwordHandler} value={enteredPassword}></input>
                <br/>
                {logState === 2 && <div id='errorMessage'>Invalid password</div>}
                {logState === 0 && <div id='errorMessage'>Username does not exist</div>}
                <button type='submit' id='Login'>Login</button>
            </form>
        </div>
    );
}

export default LoginBody;