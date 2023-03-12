import React from 'react'
import  { useRef, useEffect } from "react"
import anime from "animejs";
import TweenMax from 'gsap'


export const Home = () => {
    
const titleRef = useRef(null);

  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: ".title-text .letter",
        translateY: [200, 0],
        easing: "easeOutExpo",
        opacity: 1,
        duration: 1700,
        delay: (el, i) => 400 + 70 * i,
      })
      .add({
        // add more animations to the timeline if necessary
      });
  }, []);
    TweenMax.from(".scrolldown", 1.5, {
        delay: 0.7, 
        opacity:1,
        translateY: 200, 
        easing:"easeOutExpo"
    })
    
  return (
    <div>
        <h1 ref={titleRef} className="title-text">
            <span className="letter m">m</span>
            <span className="letter e">e</span>
            <span className="letter o">o</span>
            <span className="letter w">w</span>
        </h1>
        {/* <div className = "scrolldown">scroll down</div> */}
    </div>
    
  )
}

// anime.timeline().add({
//     targets: ".title .letter", 
//     translateY:[200,0], 
//     easing: "easeOutExpo", 
//     opacity:1, 
//     duration: 1700, 
//     delay:(el, i) => 400 + 70 * i, 

// })
export default Home