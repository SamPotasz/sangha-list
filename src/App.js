import React from 'react';


import Homepage from './pages/homepage/homepage.component';
import TopNav from './components/topnav/topnav.component';

import './App.css';
import { Menu } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Menu fixed='top'>
        <Menu.Item header>SanghaList</Menu.Item>
        <Menu.Item >Online</Menu.Item>
    </Menu>
      <Homepage />
    </div>
  );
}

export default App;
