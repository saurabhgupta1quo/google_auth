import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
//import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './components/Contact/Contact';
import NotFound from './notfound';
//import * as serviceWorker from './serviceWorker';

let rootElement = document.getElementById('root');

const routing = (
  <Router>
    <div>
       <b>
        <NavLink exact activeClassName="active" className="menu" to="/">Dashboard</NavLink>
        <NavLink activeClassName="active" className="menu" to="/Home">Home</NavLink>
        <NavLink activeClassName="active" className="menu" to="/About">About</NavLink>
        <NavLink activeClassName="active" className="menu" to="/Contact">Contact</NavLink>
      </b>
      {/* <ul>
        <li><NavLink exact activeClassName="active" to="/">Dashboard</NavLink></li>
        <li><NavLink activeClassName="active" to="/Home">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/About">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/Contact">Contact</NavLink></li>
      </ul> */}
      {/* <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul> */}
      <hr />
      <Switch>
      <Route exact path="/" component = {App} />
      <Route exact path="/Home/" component = {Home} />

      <Route path="/Home/:id" component = {Home} />

      <Route path="/About" component = {About} />
      <Route path="/Contact" component = {Contact} />
      <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, rootElement);

//ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


