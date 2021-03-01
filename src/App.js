import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Menu from './components/Menu';
// import { Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <header>
        <Link to="/">
          <button>Main</button>
        </Link>
        <Link to="/page1">
          <button>Page1</button>
        </Link>
        <Link to="/page2">
          <button>Page2</button>
        </Link>
        <Link to="/menu">
          <button>menu</button>
        </Link>
      </header> */}
      <Switch>
        <Route exact path={['/', '/react_study']} component={Main} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
