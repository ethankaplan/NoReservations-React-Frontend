import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import './Home.css'

const Home = () =>

<div className={'container'}>
  <div className={'image-container'}>
    <h1>No Reservations?</h1>
  </div>
  <div className={'main-content'}>
    <h2>No Problem.</h2>
    <p>This is the app that solves your dinner dilemma.  When you're tired of hearing "We have no times available tonight" from every top restaurant in LA, come to us.  NoReservations is the platform that allows people to buy and sell those primo tables.</p>
    <a href='/user'><Button color='green'>Get Started</Button></a>
  </div>
  <footer>
    <div>
      <h5>This is a project of Ethan Kaplan and Justin Reznik</h5>
    </div>
    <div>
      <div>
        <h5>Follow Us:</h5>
      </div>
      <div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/ethankaplan"><Icon name='linkedin' />Ethan</a>
          <a target="_blank" href="https://github.com/ethankaplan/"><Icon name='github square' />Ethan</a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/justin-reznik"><Icon name='linkedin' />Justin</a>
          <a target="_blank" href="https://github.com/reactionaryzebra/"><Icon name='github square' />Justin</a>
        </div>
      </div>
    </div>
  </footer>
</div>


export default Home
