export const USER_LOGIN = "USER_LOGIN"



export const login = (status) => {
    console.log('In auth action: ', status)
    if(!status){
        console.log('Removing token ****************** ')
        localStorage.removeItem('token');
    }
    return {
        type: USER_LOGIN,
        payload: status
    }
}

export const userLogin = (user) => {

    

    console.log('In fech gallery action *******************************')
    return dispatch => {

        return fetch('http://localhost:8080/api/v1/users/' + 'login', {
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
                dispatch(login(data.success));
                
            }
            else{
                throw new Error(data.message);
            }
        })

    }
}