import React from 'react'
import "./intro.css"
import Me from "../../imgs/Braxton-HS-transparent.png"

function Intro() {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <div className="i-intro-name-wrapper">
            <h2 className="i-intro">Hello, my name is</h2>
            <h1 className='i-name'>Braxton Kappes</h1>
          </div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Motion Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for
            customers all around the world,
            specializing in creating stylish,
            modern websites, and web services
            such as online stores.
          </p>
        </div>
      </div>
      <div className='i-right'>
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
