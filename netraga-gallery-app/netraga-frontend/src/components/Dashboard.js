import React, { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from "react-router-dom";
import authHeader from '../services/auth-header'
import {connect} from 'react-redux';
import * as actions from '../actions/gallery-actions';

function Dashboard(props) {

    
    const [search, setSearch] = useState('');

    
  useEffect(() => {

    props.onFetchGallery();
   }, []);


   const handleSearchChange = (event)=>{
      console.log('title change')
      
   }

   if(props.gallery){
    var galleryList = props.gallery.map((gallery,i)=>{
      return (
         <tr key={i}>
           <td>{i+1}</td>
           <td><Link to={'/operations/' + gallery.title}>{gallery.title}</Link></td>
           <td>{gallery.photo}</td>
           <td>{workout.desc}</td>
           <td><button onClick={()=>props.onDeletegallery(gallery._id)}> X </button></td>
         </tr>
      )
  })
   }
   

    return (

      <>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Search By Title</span>
        <input onChange={handleSearchChange} value={search} type="text" class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Photo</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {galleryList}
        </tbody>
      </Table>
      </>
    )
}



const mapStateToProps = (state) => {
  console.log('Inside Component ', state);
  return {
      gallery: state.galleryReducer.gallery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onFetchGallery: ()=>dispatch(actions.onFetchGallery()),
      onDeleteGallery: (id)=>dispatch(actions.deleteGallery(id))

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);