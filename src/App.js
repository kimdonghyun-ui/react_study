import React from 'react';

import { HashRouter, Route, Switch, BrowserRouter , Router } from 'react-router-dom';
import Main from './containers/Main/Main';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Foodmenu from './containers/Foodmenu/Foodmenu';
import Foodadmin from './containers/Foodmenu/Foodadmin';
// import { Link } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={['/', '/react_study']} component={Main} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/menu" component={Foodmenu} />
        <Route path="/menu_admin" component={Foodadmin} />
      </Switch>
    </HashRouter>
  );
}

export default App;
