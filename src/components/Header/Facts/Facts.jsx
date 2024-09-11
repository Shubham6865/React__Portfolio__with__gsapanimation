import { useState, useEffect, useRef } from 'react'
import './Facts.css'
import Odometer from 'react-odometerjs'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Facts = () => {

    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [client, setClient] = useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExperience(3)
            setProjects(20)
            setClient(5)
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        };
    }, []);

    const container = useRef(null);
    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        const timeline = gsap.timeline();

        timeline
            .from('.fact__item', {
                delay: 1.5,
                x: -100,
                stagger: .5,
                opacity: 0
            })
    }, { scope: container })
    return (

        <div className='fact__container' ref={container}>
            <div className="fact__item">
                <div className="count__container">
                    <Odometer
                        value={experience}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="names">Year of Experience</p>
            </div>
            <div className="fact__item">
                <div className="count__container">
                    <Odometer
                        value={projects}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="names">Completed Project</p>
            </div>
            <div className="fact__item">
                <div className="count__container">

                    <Odometer
                        value={client}
                    />
                    <span className="indicator">k</span>
                    {/* <p className="names">Satisfied Client</p> */}
                </div>
                <p className="names">Satisfied Client</p>
            </div>

        </div>
    )
}

export default Facts