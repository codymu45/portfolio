import React from 'react';
import './style.css';
import Profile from '../../images/profile.jpg';

function Home() {
  return (
    <div className='container'>

      <p className='nameHeader'> Cody Mullen </p>

      <div className='picture'>
        <div className="hexagon hexagon2">
          <div className="hexagon-in1">
            <div className="hexagon-in2"></div>
          </div>
        </div>
      </div>
      {/* <img 
        className='hexagon hexagon-in1' 
        src={Profile} 
        alt='Cody Mullen'>
      </img> */}
      <p> 
        My name is Cody Mullen and I am a software engineer in the making.
        I have always had an interest in computers and the way they are programmed 
        to perform in the ways of technology today. I consider myself to be a 
        creative person and hope to apply this feature of mine into the world of 
        coding. Outside of my school work and coding, I like to ride my road bike, 
        play video games, and golf.  Throughout my work experience in life I 
        have learned the value of teamwork and camraderie within your group of 
        coworkers. I hope to switch my career from my current field of 
        law enforcement, to the exciting world of programming and web development.
      </p>
    </div>
  );
}

export default Home;