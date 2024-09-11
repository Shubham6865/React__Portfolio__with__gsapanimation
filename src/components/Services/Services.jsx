import React, { useEffect, useRef } from 'react'
import './Services.css';
import { FaPaintBrush } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {

    const servicescontainer = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const el = servicescontainer.current;
        gsap.fromTo(".section__header",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: el,

                }
            }
        )

        gsap.fromTo(".service", {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: el,
                start: "-100% bottom",
                end: "bottom 20%",
                scrub: true
            }
        })
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [])

    return (
        <section id="services" ref={servicescontainer}>
            <div className="section__wrapper services__wrapper">
                <div className="section__header center">
                    <h2 className="primary__title">Services</h2>
                    <p className="text__muted description">
                        I transform your ideas,and consequently your desires, into a distinctive web project that both inspires you and captivates your customers.
                    </p>
                </div>

                <div className="services__group">
                    <article className="service">
                        <div className="service__top">
                            <div className="icon__container">
                                <FaPaintBrush className='icon' />

                            </div>
                            <h3 className="title">UI/UX Design</h3>

                        </div>
                        <div className="service__middle">
                            <p className="text_muted">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloribus eius eaque beatae iusto quos suscipit, animi cumque sit fugit.
                            </p>
                        </div>
                        <div className="service__bottom">
                            <button className="btn btn__primary">
                                Read More
                            </button>
                        </div>
                    </article>

                    <article className="service" style={{ "--color-primary": "var(--color-success)" }}>
                        <div className="service__top">
                            <div className="icon__container">
                                <BsCodeSquare className='icon' />

                            </div>
                            <h3 className="title">Web Develoment</h3>

                        </div>
                        <div className="service__middle">
                            <p className="text_muted">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloribus eius eaque beatae iusto quos suscipit, animi cumque sit fugit.
                            </p>
                        </div>
                        <div className="service__bottom">
                            <button className="btn btn__primary">
                                Read More
                            </button>
                        </div>
                    </article>
                    <article className="service" style={{ "--color-primary": "blueviolet" }}>
                        <div className="service__top">
                            <div className="icon__container">
                                <TfiWrite className='icon' />

                            </div>
                            <h3 className="title">Content Creation</h3>

                        </div>
                        <div className="service__middle">
                            <p className="text_muted">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloribus eius eaque beatae iusto quos suscipit, animi cumque sit fugit.
                            </p>
                        </div>
                        <div className="service__bottom">
                            <button className="btn btn__primary">
                                Read More
                            </button>
                        </div>
                    </article>
                </div>
            </div>


        </section>
    )
}

export default Services
