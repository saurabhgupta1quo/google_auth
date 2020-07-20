import React, { Component } from 'react';
import './App.css';
import { Chat, addResponseMessage  } from 'react-chat-popup';
import logo from './logo.svg';
import chat from './components/Chat/Chat';
//import GoogleLogin from 'react-google-login';
//import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router-dom';
//import { Link, Route } from 'react-router-dom';
//import Home from './src/Home';
//import About from './src/About';
//import Contact from './src/Contact';

let response = '';

class App extends Component {

  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(response);
  }

  render() {
    return (

  //     <div>
  //     <div>
  //         <Link to="/">Home</Link>
  //         <Link to="/About">About</Link>
  //         <Link to="/Contact">Contact</Link>
  //     </div>
  //     <div>
  //         <Route path="/" exact component={Home} />
  //         <Route path="/About" component={About} />
  //         <Route path="/Contact" component={Contact} />
  //     </div>
  // </div>

//   ReactDOM.render(
//   (
//     <Router history = {browserHistory}>
//     <Route path = "/" component = {App} >
//     <IndexRoute component = {Home} />
//     <Route path = "Home" component = {Home} />
//     <Route path = "About" component = {About} />
//     <Route path = "Contact" component = {Contact} />
//     </Route>
//     </Router>  
//   )
// )

        // <div className="App-header">
        // <ul>
        // <li><strong>Home</strong></li>
        // <li><strong>About</strong></li>
        // <li><strong>Contact</strong></li>
        // </ul>
        <div className="App">
        <h1>Hello World!</h1>
        <Chat 
                handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar={logo}
                title="My new awesome title"
                subtitle="And my cool subtitle"
        />
        {this.props.children}
        {/* </div> */}
      </div>
    );
  }
}



export default App;