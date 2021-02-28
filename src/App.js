import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      {/* <header>
        <Link to="/">
          <button>Main</button>
        </Link>
        <Link to="/page1">
          <button>Page1</button>
        </Link>
        <Link to="/page2">
          <button>Page2</button>
        </Link>
      </header> */}

      <Route exact path="/" component={Main} />
      <Route path="/page1" component={Page1} />
      <Route path="/react_study/page2" component={Page2} />
      <Route path="/menu" component={Menu} />
    </Router>
  );
}

export default App;
