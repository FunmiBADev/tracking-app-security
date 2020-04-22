import React, { Component } from 'react';
import AppNav from './AppNav';




class NotFound extends Component {
    state = {}

    render() { 
        return (
            <div>
             <AppNav/>
             <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
               Page Not Found 404
               </h2>
              </div>
            );
    }
}
 
export default NotFound;