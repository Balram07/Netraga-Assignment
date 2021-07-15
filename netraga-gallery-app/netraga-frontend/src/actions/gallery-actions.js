export const FETCH_GALLERY = "FETCH_GALLERY"

export const ADD_GALLERY = "ADD_GALLERY"


const removeGallery = (gallery) => {
    return {
        type: 'DELETE_GALLERY',
        payload: gallery
    }
}

export const deleteGallery = (id) => {
   

    return dispatch => {
        fetch('http://localhost:8080/api/v1/gallery' + id , {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(gallery => {
                console.log(gallery);
                dispatch(removeGallery(gallery));
            })
    }
}


const saveGallery = (gallery) => {
    return {
        type: ADD_GALLERY,
        payload: gallery
    }
}

export const addGallery = (gallery) => {
    
    return dispatch => {
        fetch('http://localhost:8080/api/v1/gallery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gallery)
        })
            .then(res => res.json())
            .then(gallery => {
                console.log(gallery);
                dispatch(savegallery(gallery));
            })
    }
}


const findgallery = (gallery) => {
    return {
        type: FETCH_GALLERY,
        payload: gallery
    }
}


export const fetchgallery = () => {

   
    console.log('In fech gallery action *******************************')
    return dispatch => {

        fetch('http://localhost:8080/api/v1/gallery')
            .then(res => res.json())
            .then(gallery => {
                console.log(gallery);
                dispatch(findgallery(gallery.data));
            })

    }

}