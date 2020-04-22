  
import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';


class AppNav extends Component {
    state = {  }
    render() {
        return (
          <div>
            <Navbar color="dark" dark  expand="md">
              <NavbarBrand href="/">SDLC Tracking Application</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/create_task">Create Task</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/dashboard">All Tasks</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/my_dashboard">My Dashboard</NavLink>
                  </NavItem>
                
                </Nav>
          
            </Navbar>
          </div>
        );
      }
}
 
export default AppNav;