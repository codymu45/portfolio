import React from 'react';
import './style.css';
import Poster from '../../images/poster.jpg';
import Lines from '../../images/lines.mp4';

function Home() {
  return (
    <div className='container'>
      <div className='headerDiv'>
        <h1 className='headText'>Hello, I'm Cody Mullen.</h1>
        <h1 className='headText'>Full stack web developer.</h1>
      </div>
      <div className='videoOverlay'></div>
      <div className='videoDiv'>
        <video 
          id='videoBG' 
          poster={Poster} 
          autoPlay muted loop>
          <source src={Lines} type='video/mp4' ></source>
        </video> 
      </div>
    </div>
  );
}

export default Home;