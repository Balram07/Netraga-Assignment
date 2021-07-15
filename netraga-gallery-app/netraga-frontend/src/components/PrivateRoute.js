import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';


function PrivateRoute({ component: Component, ...rest }) {


//   console.log('In Private route: ', props.isAuthenticated)
 console.log({...rest});


  return (
    <Route
      {...rest}
      render={props =>
        props.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
    console.log('Inside Component ', state);
    return {
        authenticated: state.authReducer.authenticated
    }
  }




export default connect(mapStateToProps, null)(PrivateRoute);