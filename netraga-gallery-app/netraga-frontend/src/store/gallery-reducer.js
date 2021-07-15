import * as actions from '../actions/gallery-actions';
let initialState = {
    message: '',
    gallery: [
        {}
    ]
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer***  ', action);
    switch(action.type){
        case actions.FETCH_GALLERY:
            return {
                gallery: action.payload
            }
        case actions.ADD_GALLERY:
            if(action.payload.success){
                return {
                    message: 'Gallery successfully added!'
                }
            }
            else{
                return {
                    message: 'Gallery failed to added!'
                }
            }
                
        default : return state
    }
 
}

export default reducer;