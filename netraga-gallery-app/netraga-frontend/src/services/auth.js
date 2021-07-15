import jwt from 'jwt-decode'

const API_URL = 'http://localhost:8080/api/v1/users/';

const logout = ()=>{
    localStorage.removeItem('token');
}

const login = (user) => {
    return fetch(API_URL + 'login', {
           headers: {
               'content-type': 'application/json',
           },
           method: 'POST',
           body: JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
           if(data.success){
               console.log('In auth servicee ......')
               localStorage.setItem('token', data.token);
               // show an alert message or transition into dashboard component
           }
           else{
               throw new Error(data.message);
           }
       })
       
}

const register = (user) => {
    return fetch(API_URL, {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
           console.log(data);
           if(data.success){
               console.log('In auth servicee ......')
               localStorage.setItem('token', data.token);
               // show an alert message or transition into dashboard component
           }
           else{
               throw new Error(data.message);
           }
       })
}

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    
    if(token){
        return true;
    }
    return false;

}


const isAdmin = () => {
    const token = localStorage.getItem('token');
    
    if(token){
        // Decoding logic (token)

        let decodedToken =  jwt(token);
        console.log(decodedToken)
        console.log(decodedToken.role === 'admin');
        if(decodedToken.role === 'admin'){
            return true;
        }      
        else{
            return false;
        }
    }
    return false;

}

export default {login, register, logout, isAuthenticated, isAdmin};