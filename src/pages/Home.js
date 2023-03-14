import React from 'react'
import{Link} from 'react-router-dom'
import  { useRef, useEffect } from "react"
import anime from "animejs";


export const Home = (props) => {
    
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
    <main className='bottom-margin1'>
        <img className='home-image'src='/img/home.png'></img>
        <h1 ref={titleRef} className="title-text">
            <span className="letter m">m</span>
            <span className="letter e">e</span>
            <span className="letter o">o</span>
            <span className="letter w">w</span>
            <span className="letter dot">...</span>
        </h1>
        <div className='animate'>
            <p className='home-text'>Hi I am Mochi, check out my collection!<Link to={`/products`}><img className='paws blink'src='/img/paws.png'></img> </Link></p>
            
        </div>
    </main>
    
  )
}


export default Home