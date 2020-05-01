import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import './topnav.styles.scss';

const TopNav = () => (
    <Navbar sticky='top' expand='lg' variant='light' bg='light'>
        <Navbar.Brand>SanghaList</Navbar.Brand>
        {/* <Navbar.Text>Online meditation communities in the time of COVID</Navbar.Text> */}
      
        <Nav.Item>
          <Link to="/directory">Directory</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/right-now">Sit Right Now</Link>
        </Nav.Item>
    </Navbar>
)

export default TopNav;