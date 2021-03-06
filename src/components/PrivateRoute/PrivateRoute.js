// dependencies
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './../../App';

const PrivateRoute = (props) => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   return (
      <Route
         // {...rest}
         render={({ location }) =>
            loggedInUser.email ? (
               props.children
            ) : (
               // console.log(`not found`)

               <Redirect
                  to={{
                     pathname: '/login',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   );
};

export default PrivateRoute;
