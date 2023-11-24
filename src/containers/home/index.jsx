import React, { useEffect } from 'react'
import "./styles.scss";
import { useNavigate } from 'react-router';
import { Animate } from 'react-simple-animate';
function Home() {
  const navigate = useNavigate();

 
 
  return (
    <section className='home' id="home">
       <div className='home__text-wrapper'>
           <h1>
              Bonjour, je suis Aboubacar  Sidiki KOUROUMA
              <br />
              Full Stack Developer
           </h1>
           <Animate play
           duration={1.5}
           delay={1}
           start={{
             transform:'translateY(550px)'
           }}
           end={{
            transform:'translateX(0px)'
           }}
           >
              <div className='home__contact-me'>
                  <button onClick={() => navigate("/contact") }>
                    Hire, Me
                  </button>
              </div>
           </Animate>
           
       </div>
    </section>
  )
}

export default Home