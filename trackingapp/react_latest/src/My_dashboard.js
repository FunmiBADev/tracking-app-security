import React, { Component } from 'react';
import AppNav from './AppNav';




class My_dashboard extends Component {
    state = {}

    render() { 
        return (
            <div>
             <AppNav/>
             <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
               Welcome to my dashboard!
               </h2>
              </div>
            );
    }
}
 
export default My_dashboard;