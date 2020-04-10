import React from 'react';

import { Navbar } from 'react-bootstrap';

import './topnav.styles.scss';

const TopNav = () => (
    <Navbar expand='lg' variant='light' bg='light'>
        <Navbar.Brand>SanghaList</Navbar.Brand>
        <Navbar.Text>Online meditation communities in the time of COVID</Navbar.Text>
    </Navbar>
)

export default TopNav;