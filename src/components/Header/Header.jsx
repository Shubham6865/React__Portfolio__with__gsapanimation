import React, { useRef } from 'react'
import './Header.css'
import { profile1 } from '../../images';
import Facts from './Facts/Facts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/files/Resume.pdf';
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const container = useRef(null);
    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        gsap.fromTo(".profile__photo__container", {
            scale: 0.5,
            duration: 1,
            opacity: 0.5
        }, {
            scale: 1,
            duration: 1,
            ease: "sine.in",
            opacity: 1
        })

        gsap.from(".intro__text", {
            fontSize: 100,
            duration: 1,
            delay: 1,
            ease: "sine.in"
        })

        const timeline = gsap.timeline();
        timeline
            .from(".header__info__top", {
                opacity: 0,

            })
            .from(".header__title", {
                opacity: 0,
                y: -30
            })
            .from(".header__description", {
                opacity: 0,

            })
            .from(".btn", {
                x: -40,
                opacity: 0,
                stagger: .5
            })

    }, { scope: container })
    return (

        <header id='header' className="blur-effect" ref={container}>
            <div className='stroke__text intro__text '>HELLO</div>
            <div className="section_wrapper header__container">
                <div className="column intro__container blur-effect">
                    <div className="header__info" >
                        <div className="header__info__top">
                            Hello There! I'm <span className='color__primary'>Shubham Parade</span>
                        </div>
                        <div className="header__info__middle "  >
                            <h1 className="primary__title header__title">
                                I'M A REACT DEVELOPER
                            </h1>

                            <p className="text__muted header__description">I specialize in dissecting intricate user experience challenges to engineer solutions with a focus on integrity, delivering impactful results that resonate with millions of users.</p>
                        </div>
                        <Facts />
                        <div className="header__info__bottom">
                            <button className="btn " onClick={handleDownload}>
                                Download CV
                            </button>
                            <a href="mailto:paradeshubham6865@gmail.com" className='btn'>Email me</a>
                        </div>
                    </div>
                </div>
                <div className="column profile__wrapper " >
                    <div className="profile__photo__container" >
                        <img src={profile1} className='profile__photo' alt="profile 1" />
                    </div>
                </div>
            </div>

        </header >
    )
}

export default Header
