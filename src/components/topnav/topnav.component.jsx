import React from 'react';

import { Container, Header, Sub, Menu } from 'semantic-ui-react';

// import './topnav.styles.scss';

const TopNav = () => (
    <Menu fixed='top'>
        <Menu.Item header>SanghaList</Menu.Item>
        <Menu.Item >Online meditation communities in the time of COVID</Menu.Item>
    </Menu>
)

export default TopNav;