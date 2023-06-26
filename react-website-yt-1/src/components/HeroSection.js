import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted /> 
        <h1>ALLAHA EMANET OL 2!!!</h1>
        <p>hemen izle</p>
        <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
              A.E.O 2 İZLE
            </Button>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
               fragmani izle <i className='far fa-play-circle'/> 
            </Button>
        </div>
    </div>
  );
}

export default HeroSection
