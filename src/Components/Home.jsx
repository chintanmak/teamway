import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './_home.scss';
import headerimg from './Assets/header people.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar/>

        <div className='header_container'>
          <div className="header_title">
          <div className='width30rem'>
            <h2>Build the World's best teams today.
            <br />
            <hr />
            </h2>
            <button className='activebtn btn homebtn'>Request access</button>
            <p>Teamway is a member-owned Society where world-class tech professionals team up with progressive companies to build meaningful products</p>
            </div>
          </div>
          <div className='header_img'>
            <img src={headerimg} />
          </div>
        </div>
      </>
    )
  }
}
