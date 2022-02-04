import './App.css';
import React from 'react';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search'>
            {/* search page  */}
            <SearchPage />
            <h1>serarh page</h1>
          </Route>
          <Route path='/'>
            {/*Home page*/}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
