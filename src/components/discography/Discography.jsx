import "./Discography.css";
import React from 'react';
import { Link } from 'react-scroll';
import prev from "../../img/ui/chevron_up.png";
import next from "../../img/ui/chevron_down.png";
import { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

const Discography = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="discography">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="skills" spy={true} smooth={true}>
                    <img className="prev-next-img" src={prev} alt=""/>
                </Link>
            </div>
            <div className="discography-wrapper" data-aos="fade-up">
                <h2>I'm also a hobbyist songwriter and music producer!</h2>
                <iframe className="spotify-player" src="https://open.spotify.com/embed/artist/5rGEVFu3KR6HZ5a6WjgXSZ?theme=0" frameborder="0" allowtransparency="true" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
            </div>
            <div className="next">
                <Link activeClass="active" to="more" spy={true} smooth={true}>
                    <img className="prev-next-img" src={next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Discography