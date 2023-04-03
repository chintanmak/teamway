import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './_home.scss';
import logo from './Assets/teamwaylogo.png';
import headerimg from './Assets/header people.jpg';
import logo1 from './Assets/logo1.png';
import logo2 from './Assets/logo2.png';
import logo3 from './Assets/logo3.png';
import logo4 from './Assets/logo4.png';
import logo5 from './Assets/logo5.png';
import pcbg from './Assets/pcbg.jpg';
import fb from './Assets/icons8-facebook.svg';
import discord from './Assets/icons8-discord.svg';
import twitter from './Assets/icons8-twitter.svg';
import linkedin from './Assets/icons8-linkedin-2.svg';
import article from './Assets/icons8-articles-50.png';
import arrow from './Assets/icons8-right-arrow-48.png';

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

        <div className='companieslogo_container'>
          <p>Trusted by hundreds of progressive companies</p>
          <hr />
          <div className='companieslogo'>
            <img src={logo1} />
            <img src={logo2} />
            <img src={logo3} />
            <img src={logo4} />
            <img src={logo5} />
          </div>
          <hr />
        </div>

        <div className='techsociety_container'>
        <div className='techsociety_title'>
          <h2>The member-owned tech Society.</h2>
          <p>Fundamental changes are happening to the labor market roght now. it's the beginning of a new era of works.</p>
          <p>we beleive a new hiring infrastructure is required to satisfy the chaning needs for companies and tech professionals.</p>
          <p>A new model for work that is fair, inclusive and empowering. That's why we built Teamway.</p>
        </div>
        <div className='techsociety_img'>
          <img src={pcbg} />
        </div>
        </div>

        <div className='footer_container'>

        <h2>Leading the next era of work.</h2>
        <br />
        <br />
        <div className='socialmedia_container'>
          <div className='socialmedia'>
          <img src={fb} />
          <p>facebook</p>
          <span className='arrow'>
            <img src={arrow} />
          </span>
          </div>

          <div className='socialmedia'>
          <img src={twitter} />
          <p>Twitter</p>
          <span className='arrow'>
            <img src={arrow} />
          </span>
          </div>

          <div className='socialmedia'>
          <img src={discord} />
          <p>Discord</p>
          <span className='arrow'>
            <img src={arrow} />
          </span>
          </div>

          <div className='socialmedia'>
          <img src={linkedin} />
          <p>Linkedin</p>
          <span className='arrow'>
            <img src={arrow} />
          </span>
          </div>

          <div className='socialmedia'>
          <img src={article} />
          <p>Articles</p>
          <span className='arrow'>
            <img src={arrow} />
          </span>
          </div>
        </div>
       
        <div className='footercolumns'>
          <div className='cols'>
            <h3>Companies</h3>
            <p>Why Teamway?</p>
            <p>Professions</p>
            <p>How we compare</p>
            <p>The process</p>
          </div>

          <div className='cols'>
            <h3>Companies</h3>
            <p>Why Teamway?</p>
            <p>How we compare</p>
            <p>Application process</p>
            <p>Frequently asked</p>
          </div>

          <div className='cols'>
            <h3>Companies</h3>
            <p>The new work era</p>
            <p>TMW Token</p>
            <p>Roles</p>
            <p>Whitepaper</p>
          </div>

          <div className='cols'>
            <h3>Companies</h3>
            <p>About</p>
            <p>Articles</p>
            <p>F.A.Q.</p>
            <p>Contact</p>
          </div>
        </div>

        <div className='footerright'>
        <img src={logo} />
        <p>Code of Conduct</p>
        <p>Privacy Policy</p>
        <p>Cookies Declaration</p>
        </div>
        </div>
      </>
    )
  }
}
