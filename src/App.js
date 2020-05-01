import React, { useEffect } from 'react';

import Homepage from './pages/homepage/homepage.component';
import TopNav from './components/topnav/topnav.component';

import './App.styles.scss';

function App() {

  useEffect( () => {
    // const unsubscribe = addCollectionAndDocuments('data', Object.values(SANGHA_DATA.data));
    
    // return() => {
    //   unsubscribe();
    // }
  }, [])

  return (
    <div className="App">
      <TopNav />
      <Homepage />
    </div>
  );
}

export default App;