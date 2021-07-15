import authHeader from './auth-header'
const API_URL = 'http://localhost:8080/api/v1/';


const addGallery = (gallery) => {
    return fetch(API_URL + 'gallery/', {
           headers: authHeader(),
           method: 'POST',
           body: JSON.stringify(gallery)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
       })
       
}

export default {addGallery};