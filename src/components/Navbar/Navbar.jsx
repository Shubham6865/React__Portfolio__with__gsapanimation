import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css';
import { menu } from '../../data';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import gsap, { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react';
import { logo } from '../../images'
import { ImArrowUpRight2 } from "react-icons/im";

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > 145) {
            return setVisible(true)
        }
        return setVisible(false);
    }
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const container = useRef(null)
    gsap.registerPlugin(useGSAP)
    useEffect(() => {
        if (visible) {
            gsap.fromTo(".navbar__container", {
                y: -200,
                width: '100%'
            },
                {
                    y: 0,
                    tp: 0,
                    zIndex: 100
                }
            )
        }
    }, [visible])

    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.from(".tab__item", { opacity: 0, stagger: 0.5, ease: Power3 })
    }, { scope: container })
    return (

        <nav className={`navbar__container ${visible ? 'visible' : ''}`} ref={container}>
            {
                showSidebar ? (
                    <div className="overlay" onClick={() => setShowSidebar(!showSidebar)}></div>
                ) : ""
            }
            <div className="logo_container" onClick={() => scroll.scrollTo({ duration: 500 })}>

                <img src={logo} alt="logo" />
            </div>
            <div className={`tab__group ${showSidebar ? 'show' : ''}`}>
                <span className="icon__container close__btn " onClick={() => setShowSidebar(!showSidebar)} >
                    <FaTimes />
                </span>
                {
                    menu.map((list, index) => (
                        <Link
                            activeClass='active'
                            className='tab__item name'
                            to={list.name.toLowerCase()}
                            spy={true}
                            offset={-70}
                            duration={500}
                            key={index}
                        >
                            {
                                list.name
                            }
                        </Link>
                    ))
                }
            </div>
            <div className="nav__buttons_group">
                <button className='btn btn__primary hiremebtn  ' onClick={handleScrollToContact} >Let's Connect
                    <ImArrowUpRight2 className='Arrowlogo' />
                </button>
                <FaBarsStaggered className='menu' onClick={() => setShowSidebar(!showSidebar)} />
            </div>
        </nav>
    )
}

export default Navbar
