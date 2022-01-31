import "./More.css";
import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import prev from "../../img/ui/chevron_up.png";
import top from "../../img/ui/double_chevron_up.png";
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const More = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wi40laa', 'template_iuofd3z', formRef.current, 'user_KEzYxSuxIyKZ8bpKle11N')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        document.getElementById("contact-form").reset();
    }

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="more">
            <div className="empty-space-for-navbar"/>
            <div className="prev">
                <Link activeClass="active" to="skills" spy={true} smooth={true}>
                    <img className="prev-next-img" src={prev} alt=""/>
                </Link>
            </div>
            <div className="more-wrapper" data-aos="zoom-in">
                <div className="more-left">   
                    <h2>Let's chat!</h2>
                    <p className="form-preface">Have something to say? Feel free to leave me a message below.</p>
                    <form ref={formRef} onSubmit={handleSubmit} id="contact-form">
                        <input type="text" name="name" placeholder="Name" required/>
                        <input type="email" name="email" placeholder="Email" required/>
                        <input type="text" name="subject" placeholder="Subject" required/>
                        <textarea rows="8" name="message" placeholder="Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    {done && <p className="form-result">Thank you for your message! I'll get back to you very soon.</p>}
                </div>
                <div className="more-right">
                    <div className="more-right-links">
                        <h2>More ways to connect with me</h2>
                        <div className="more-socials">
                            <Icon className="more-socials-1" icon="akar-icons:linkedin-fill" onClick={() => { window.open("https://www.linkedin.com/in/grantleeyx/", "_blank") }} />
                            <Icon className="more-socials-2" icon="akar-icons:github-fill" onClick={() => { window.open("https://github.com/grrrrnt", "_blank") }} />
                            <Icon className="more-socials-3" icon="akar-icons:instagram-fill" onClick={() => { window.open("https://www.instagram.com/grrrr_nt", "_blank") }} />
                            <Icon className="more-socials-4" icon="akar-icons:spotify-fill" onClick={() => { window.open("https://smarturl.it/music-by-grant", "_blank") }} />
                            <Icon className="more-socials-5" icon="bx:bxl-gmail" onClick={() => { window.open("mailto:grantlee97@gmail.com", "_blank") }} />
                        </div>
                    </div>
                    <div className="more-right-resume">
                        <h2>Resume</h2>
                        <p>You can download <a href="https://personal-portfolio-resources.s3.amazonaws.com/Grant's+Resume.pdf" rel="noopener noreferrer" target="_blank">my resume here</a>.</p>
                    </div>
                    <div className="more-right-thank-you">
                        <h2>Thank you for checking out my website!</h2>
                        <p>If you would like, here is some content you might find interesting:</p>
                        <p>•  <RouterLink to="/blog" className="devblog-link">Devblog: How I made this website</RouterLink> <i>(Coming soon)</i></p>
                        <p>•  <a href="https://smarturl.it/music-by-grant" rel="noopener noreferrer" target="_blank">Music discography</a> <i>(Coming soon)</i></p>
                    </div>
                </div>
                {/* <div className="in-development">
                    <h2>In development... Stay tuned!</h2>
                </div> */}
            </div>
            <div className="next">
                <Link activeClass="active" to="intro" spy={true} smooth={true}>
                    <img className="prev-next-img" src={top} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default More