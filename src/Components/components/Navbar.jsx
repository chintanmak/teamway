import React, { Component } from 'react';
import '../components/_navbar.scss';
import logo from '../Assets/teamwaylogo.png';


export default class Navbar extends Component {
  render() {
    return (
            <>
                <div className='navbar_container'>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <div className='menus'>
                        <p>Companies</p>
                        <p>Members</p>
                        <p>Society</p>
                        <p>About</p>
                        <p>Login</p>
                    </div>
                    <div className='btns'>
                        <button className='btn'>Join Society</button>
                        <button className='btn activebtn'>Hire a team</button>
                    </div>
                </div>
            </>
        )
  }
}
