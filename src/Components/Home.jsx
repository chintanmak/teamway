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
import person1 from './Assets/person1.jpg';
import person2 from './Assets/person2.jpg';
import fb from './Assets/icons8-facebook.svg';
import discord from './Assets/icons8-discord.svg';
import twitter from './Assets/icons8-twitter.svg';
import linkedin from './Assets/icons8-linkedin-2.svg';
import article from './Assets/icons8-articles-50.png';
import arrow from './Assets/icons8-right-arrow-48.png';
import face1 from './Assets/face1.jpg';
import face2 from './Assets/face2.jpg';
import faces3 from './Assets/faces3.jpg';
import face4 from './Assets/face4.jpg';

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

        <div className='testimonial_container'>
        <div className='testimonail_title'>
          <h2>Loved by iconic Companies.</h2>
        </div>

        <div className='testimonail_content'>
          <img src={person1} />
          <div className='cols2content'>
            <div className='testi_col1'>
            <p>Teamway is simply a great solution, quick to get started and find talent, easy to onboard and a perfect solution when you need real flexibility.</p>
            </div>
            <div className='testi_col2'>
            <p><b>Mathias Hermansen</b></p>
            <p>Co-Founder & CEO, GamerPay</p>
            </div>
          </div>
          <hr />
          <div className='percentagecontent'>
          <div>            
          </div>
          <div>
          <h2>100%</h2>
          <span className='smallpsize'>match rate</span>            
          </div>
          </div>
        </div>

        <div className='testimonail_content'>
          <img src={person2} />
          <div className='cols2content'>
            <div className='testi_col1'>
            <p>If you too are finding it difficult and time consuming to hire strong engineers, you should try Teamway. super intuitive platform, incredible talent and speed.</p>
            </div>
            <div className='testi_col2'>
            <p><b>Dennis Green-Lieber</b></p>
            <o>Head of Product, Neurons</o>
            </div>
          </div>
          <hr />
          <div className='percentagecontent'>
          <div>            
          </div>
          <div>
          <h2>7X</h2>
          <span className='smallpsize'>faster than traditional hiring.</span>            
          </div>
          </div>
        </div>

        </div>

        <div className='ledby_container'>
          <div className='ledby_title'>
            <h2>Led by a curated society of professionals.</h2>
            <p>Teamway is growing fast and we're adding highly skilled builders and teams to the decentralised society everyday.</p>
          </div>

          <div className='mainledby_container'>
            <div className='firstcol_container'>
              <div>
               <img src={face1} />
              </div>
              <div className='numbersection'>
              <p>Members</p>
              <p className='numbersize'>627</p>
              </div>
            </div>
            <div className='secondcol_container'>
              <img src={face2} />
            </div>
            <div className='thirdcol_container'>
            <div className='thirdfirstcol_container'>
              <div className='numbersection'>
              <p>Members</p>
              <p className='numbersize'>627</p>
              </div>
              <div>
               <img src={face1} />
              </div>
            </div>
            <div className='wideimg_container'>
              <img src={faces3}/>
            </div>
            </div>
            <div className='secondcol_container'>
              <img src={face4} />
            </div>
          </div>
        </div>

        <div className='applybtn_container'>
          <p>The future of work starts here.</p>

          <div className='mainbtnsection'>
            <hr/>
            <button className='btn activebtn'>Apply as member</button>
            <hr/>
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
