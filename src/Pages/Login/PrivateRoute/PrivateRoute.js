import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Route } from 'react-router';

import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation ="border" variant="danger" />
    }
    return (
        <Route 
           {...rest}
           render={({location}) => user.email ? children : <Navigate
               to={{
                   pathname: "/login",
                   state: { from: location }
               }}
          ></Navigate>
       

          }
        >

        </Route>    
    );
};

export default PrivateRoute;