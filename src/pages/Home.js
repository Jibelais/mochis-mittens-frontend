import React from 'react'
import  { useRef, useEffect } from "react"
import anime from "animejs";


export const Home = () => {
    
const titleRef = useRef(null);

  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: ".title-text .letter",
        translateY: [200, -100],
        easing: "easeOutExpo",
        opacity: 1,
        duration: 2000,
        delay: (el, i) => 500 + 70 * i,
      })
     
  }, []);

  return (
    <div>
        <img className='home-image'src='/img/home.png'></img>
        <h1 ref={titleRef} className="title-text">
            <span className="letter m">m</span>
            <span className="letter e">e</span>
            <span className="letter o">o</span>
            <span className="letter w">w</span>
            <span className="letter dot">...</span>
        </h1>

        <div className='animate'>
            <p>Hi I am Mochi.</p>
            {/* <p>I am very picky like my mommy.</p> */}
            <p>check out my favorite picks!</p>
        </div>
    </div>
    
  )
}


export default Home