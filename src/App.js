import React, { useEffect } from 'react';
import { Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';

import NowPage from './pages/now/now.component';
import Directory from './pages/directory/directory.component';

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
      <BrowserRouter>
      <TopNav />
        <Switch>
          <Route exact path='/right-now' component={ NowPage } />
          <Route path='/' component={ Directory } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;