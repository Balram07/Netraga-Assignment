import React, { useState } from 'react'
import WorkoutService from '../services/gallery';
import {connect} from 'react-redux';
import * as actions from '../actions/gallery-actions';
import { Alert } from 'react-bootstrap'


function AddGallery(props){

    const [title, setTitle] = useState('');
    const [Photo, setPhoto] = useState('');
    const [desc, setDesc] = useState('');
   

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onPhotoChange = (event) => {
        setPhoto(event.target.value);
    }
    const onDescChange = (event) => {
        setDesc(event.target.value);
    }

    const addGallery = ()=> {
        let workout = {title, photo, desc, user: {
            _id: '60ab4882ca8ce633c096aa8e'
        }};
        console.log(gallery)
       
        props.onAddGallery(gallery);
    }

    return (
        <>
        <h2>Add Gallery</h2>

        {props.message && <Alert key="idx" variant="primary">
            {props.message}
        </Alert>}

        <input onChange={onTitleChange} value={title} type="text" placeholder="Enter title"/>
        <input onChange={onPhotoChange} value={title} type="text" placeholder="Upload photo"/>
        <input onChange={onDescChange} value={desc} type="email" placeholder="Enter desc"/>
        <button onClick = {addGallery}>Add Gallery</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        onAddGallery: (gallery)=>dispatch(actions.addGallery(gallery))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(AddGallery);