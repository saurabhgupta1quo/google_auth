import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component  {

    onsubmit= () =>{
    this.props.history.push('/')
    }

      render(){
          return (
          <div>
               <h1>Howdy! Namaste. Bonjour. Konichiwa!</h1>
               <p>Happy to see you here. How can we help you?</p>
                   <form>
                         <label className="Label">Name</label>     
                         <input className="InputElement" placeholder=" Name*" type="name" /><br/>

                         <label className="Label">Email</label>
                         <input className="InputElement" placeholder=" Email*" type="email" /><br/><br/>

                         <button className="Button" onClick={this.onsubmit}>Submit</button>
                   </form>
          </div>
          )
      }
}

export default Contact;