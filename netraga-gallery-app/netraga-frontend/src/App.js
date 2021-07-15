import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions/auth-actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'

import PrivateRoute from "./components/PrivateRoute";
import AddGallery from "./components/AddGallery";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthService from './services/auth';


function App(props) {


 
  const [showAdmin, setShowAdmin] = useState(false);
 

  // initialization 
  useEffect(() => {
   
    console.log('Admin role: ', showAdmin)
;  }, [])

  console.log('render again..', showAdmin)

  return (

    <Router>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Gallery App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.authenticated &&<Nav.Link href="#home"><Link to="/dashboard">Dashboard</Link></Nav.Link>}
            {props.authenticated &&<Nav.Link href="#home"><Link to="/weights">Gallery View</Link></Nav.Link>}
            {props.authenticated &&<Nav.Link href="#home"><a href="#" onClick={()=>props.onUserLogout()}>Logout</a></Nav.Link>}
            {showAdmin && <Nav.Link href="#link"><Link to="/addworkout">Add Gallery</Link></Nav.Link>}
            
            {!props.authenticated && 
              <>
              <Nav.Link href="#link"><Link to="/">Login</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/register">Register</Link></Nav.Link>
              </>
            }
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
       
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Login}>  
        </Route>
        <Route path="/register" component={Register}>
        </Route>
        <PrivateRoute path="/addGallery" component={AddGallery}>
        </PrivateRoute>
        <Route path="/dashboard" component={Dashboard}>
        </Route>

      </Switch>

 
    </Router>
   
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
    onUserLogout: (user)=>dispatch(actions.login(false))
  }
}


// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToProps)(App);