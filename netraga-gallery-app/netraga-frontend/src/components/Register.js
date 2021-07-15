import React, { useState } from 'react'
import AuthService from '../services/auth';
import { useHistory } from "react-router-dom";

function Register(){
    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        console.log('registering a user');
        let user = {name, email, password}
        console.log(user)
    
        AuthService.register(user)
        .then(()=>history.push("/dashboard"))
        .catch(err=> console.log(err));
       
    }
    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return(
        <>
        <h2>Register</h2>
        <input onChange={onNameChange} value={name} type="text" placeholder="Enter name"/>
        <input onChange={onEmailChange} value={email} type="email" placeholder="Enter email"/>
        <input onChange={onPasswordChange} value={password} type="password" placeholder="Enter password"/>
        <button onClick = {register}>Register</button>
        </>
    );
}

export default Register;