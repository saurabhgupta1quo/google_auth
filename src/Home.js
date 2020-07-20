import React from 'react';
//import React, { Component } from 'react';
 import { Route, Link } from 'react-router-dom';

const User = ({match}) => <p>{match.params.id}</p>;

class Home extends React.Component  {
      render(){
        // const { url } = this.props.match;
        // const { params } = this.props.match
        console.log(this.props)
          return (
              <div>
                  <h1>Home...</h1>
                  <strong>select a user</strong>
                  <ul>
                  <li><Link to="/Home/1">User 1 </Link></li>
                  <li><Link to="/Home/2">User 2 </Link></li>
                  <li><Link to="/Home/3">User 3 </Link></li>
                  </ul>
                  <Route path="/Home/:id" component={User} />
                  {/* <p>{params.id}</p> */}
              </div>
          )
      }
}

export default Home;
