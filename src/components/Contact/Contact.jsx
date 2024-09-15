import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
    return (
        <section id='contact'>
            <div className="section__wrapper contact__container">
                <div className="section__header">
                    <h2 className="primary__title">
                        Contact Me
                    </h2>
                    <p className="text__muted description">
                        Ready to take your digital presence to the next level? Whether you're looking to launch a new website, revamp an existing one, or need expert advice on the best web technologies, I'm here to help, Reach out to discuss your projects, ask questions, or just say hello.
                    </p>
                </div>
                <div className="contact__group">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className='contact__icon' />
                            <h3>Email</h3>
                            <h5>paradeshubham6865@gmail.com</h5>
                            <a href="mailto:paradeshubham6865@gmail.com" target='_blank' rel="noreferrer" className='btn'>Send a message</a>
                        </article>
                        <article className="contact__option">
                            <FaLinkedinIn className='contact__icon' />
                            <h3>Linkedin</h3>
                            <h5>shubhamparade</h5>
                            <a href="https://www.linkedin.com/in/shubhamparade/" target='_blank' rel="noreferrer" className='btn'>Send a message</a>
                        </article>
                        <article className="contact__option">
                            <BsWhatsapp className='contact__icon' />
                            <h3>Whatsapp</h3>
                            <h5>+918855889034</h5>
                            <a href="https://api.whatsapp.com/send?phone=+918855889034" target='_blank' rel="noreferrer" className='btn'>Send a message</a>
                        </article>
                    </div>

                    <form target="_blank" action="https://formsubmit.co/shubham.parade6865@gmail.com" method="POST">
                        <input type="text" name='name' placeholder='Your full name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows={7} placeholder='Your Message'></textarea>
                        <button type='submit' className="btn btn__primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Contact
