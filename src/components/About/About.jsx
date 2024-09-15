import React, { useEffect, useRef } from 'react'
import './About.css'
import { profile2 } from '../../images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const About = () => {

    const container = useRef(null);
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const el = container.current;
        gsap.fromTo(".about__container", {
            scale: 0.7
        },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: el,
                    scrub: true
                }
            }
        )
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [])
    return (
        <section id='about' ref={container}>
            <div className="section__wrapper about__container">
                <div className="me__container blur-effect">
                    <div className="photo__container">
                        <img src={profile2} alt="profile2" />
                    </div>
                </div>
                <div className="section__header">
                    <h2 className="primary__title">About Me</h2>
                    <h1 className="title">I am  <span className='color__primary'>Shubham Parade</span></h1>
                    <p className="text__muted description">


                        I'm a skilled React developer focused on building intuitive and responsive web applications. With expertise in React.js, Redux, and modern CSS frameworks, I create efficient, scalable solutions. My strengths include problem-solving, clean code practices, and delivering projects on time. I'm passionate about crafting seamless user experiences and always aiming to improve.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
