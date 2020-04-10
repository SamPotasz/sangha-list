import React from 'react';


import Homepage from './pages/homepage/homepage.component';
// import TopNav from './components/topnav/topnav.component';

import './App.styles.scss';
import TopNav from './components/topnav/topnav.component';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Homepage />
    </div>
  );
}

export default App;