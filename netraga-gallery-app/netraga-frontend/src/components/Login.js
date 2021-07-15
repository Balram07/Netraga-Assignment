import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import {connect} from 'react-redux';
import * as actions from '../actions/auth-actions';

function Login(props){

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const login = () => {
        console.log('registering a user');
        let user = {email, password}
        console.log(user)
        props.onUserLogin(user);
    

    }
  
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    let authMessage = ''
    if(props.authenticated){
        authMessage = "Authenticated" 
    }

    return(
        <>
        <h2>Login</h2>
        {/* <h2>Authenticate: {props.authenticated}</h2> */}
        <h3>{authMessage}</h3>
        <input onChange={onEmailChange} value={email} type="email" placeholder="Enter email"/>
        <input onChange={onPasswordChange} value={password} type="password" placeholder="Enter password"/>
        <button onClick = {login} data-testid="login-button">Login</button>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log('Inside Component ', state);
    return {
        authenticated: state.authReducer.authenticated
    }
  }


const mapDispatchToProps = (dispatch) => {
  return {
      onUserLogin: (user)=>dispatch(actions.userLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);